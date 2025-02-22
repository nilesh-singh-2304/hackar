// import React from 'react'
// import Head from 'next/head'
// import { Excalidraw } from "@excalidraw/excalidraw";

// const About = () => {
//   return (
//     <div>
//       <div className='h-screen'>
//         <Excalidraw />
//       </div>
//     </div>
//   )
// }

// export default About

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import Excalidraw to disable SSR
const ExcalidrawComponent = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false } // Disable server-side rendering
);

const About = () => {
  return (
    <div>
      <div className="h-screen">
        <ExcalidrawComponent />
      </div>
    </div>
  );
};

export default About;
