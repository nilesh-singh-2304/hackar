import * as React from 'react';
import { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len: number) {
  let result = '';
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  const maxPos = chars.length;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

function generateToken(tokenServerUrl: string, appID: number, userID: string) {
  return fetch(tokenServerUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: appID, user_id: userID }),
  }).then((res) => res.text());
}

function getUrlParams(url = window.location.href) {
  const urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  const userID = randomID(5);
  const userName = randomID(5);
  const callContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startMeeting = async () => {
      const token = await generateToken(
        'https://mini-game-test-server.zego.im/api/token',
        2013980891,
        userID
      );

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
        2013980891,
        token,
        roomID,
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: callContainerRef.current!,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.origin}${window.location.pathname}?roomID=${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    startMeeting();
  }, []);

  return (
    <div
      className="myCallContainer"
      ref={callContainerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
