
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { v4 as uuid } from 'uuid'
import MemSidebar from '@/components/memSidebar'

const Sess = () => {
  const {fullName , setfullName} = useUser()
  const [roomId, setroomId] = useState('')
  const router = useRouter()

  useEffect(() => {
    setfullName('')
    console.log(fullName)
  }, [])
  return (
    <div>
        <MemSidebar />
      <div className='sm:ml-64 flex'>
      <div className="p-4 w-full">
   <div className="p-4 border-2 h-150 flex flex-col justify-center items-center shadow-xl border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
     <section>
        <div className='flex flex-col justify-center items-center'>
            <Image src={''} alt='' height={100} width={100}/>
            {/* Image */}
            <p className='text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold'>Have a smooth meeting !!</p>
            <p className='text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold'>with team members</p>
            {/* <p className='w-1/2 px-4 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos </p> */}
            <div className='flex items-center justify-center'>
            <div className="mb-6 mt-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" 
               id="name"

               onChange={(e) => setfullName(e.target.value.toString())}
               className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />

        {fullName && fullName.length >=3 && <>
         <div className='justify-center items-center flex-col flex'>
         <div className='mt-4 '>
         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room ID</label>
          <input type="text" 
               id="roomId"
               value={roomId}
               onChange={(e) => setroomId(e.target.value.toString())}
               className="bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Room ID" required />
          </div>

          <button className="btn glass mt-4" disabled={!roomId} onClick={()=> router.push(`/member/session/room/${roomId}`)}>Glass button</button>
         </div>
         <div className='justify-center items-center flex-col flex mt-4'>
          <button
          className='text-normal font-medium hover:text-blue-500 hover:underline'
          onClick={() => router.push(`${process.env.NEXT_PUBLIC_HOST}`)}
          >or create a new meeting</button>
         </div>
        </>}
         </div> 

         
            </div>
        </div>
     </section>
   </div>
</div>
    </div>
    </div>
  )
}

export default Sess


// import * as React from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url = window.location.href
// ) {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//   const roomID = getUrlParams().get('roomID') || randomID(5);
//   let myMeeting = async (element) => {

//  // generate Kit Token
//  const appID =2081986226 ;
//  const serverSecret = "d5e2e37ef555f40b88b76e168ea7c5f7";
//  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));

//  // Create instance object from Kit Token.
//  const zp = ZegoUIKitPrebuilt.create(kitToken);
//  // start the call
//  zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: 'Personal link',
//             url:
//              window.location.protocol + '//' + 
//              window.location.host + window.location.pathname +
//               '?roomID=' +
//               roomID,
//           },
//         ],
//         scenario: {
//          mode: ZegoUIKitPrebuilt.VideoConference,
//         },
//    });
//   };

//   return (
//     <div
//       className="myCallContainer"
//       ref={myMeeting}
//       style={{ width: '100vw', height: '100vh' }}
//     ></div>
//   );
// }