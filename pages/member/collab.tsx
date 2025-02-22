'use client'
import React from 'react'
import axios from 'axios';
import MemSidebar from '@/components/memSidebar'
import { log } from 'console';
import Link from 'next/link';
import dynamic from "next/dynamic";

// Dynamically import Excalidraw to disable SSR
const ExcalidrawComponent = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false } // Disable server-side rendering
);

const Index =({blogs}) => {
   console.log(blogs)
  return (
    <div>
      <MemSidebar />

      <div className=" sm:ml-64">
      <div>
      <div className="pt-10 h-screen">
        <ExcalidrawComponent />
      </div>
    </div>
   
</div>
    </div>
  )
}

export default Index 
