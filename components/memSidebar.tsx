import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { MdAssistant } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { RiCommunityFill } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
import { RiAccountPinBoxFill } from "react-icons/ri";

import Link from 'next/link';
const MemSidebar = () => {
  return (
    <div>
      

<nav className="fixed top-0 z-50 w-full shadow-lg bg-gray-300 border-b border-gray-200">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        
        {/* <a href="https://flowbite.com" className="flex ms-2 md:me-24">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
        </a> */}
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-300 pt-14 transition-transform -translate-x-full border-r-2 border-gray-500 sm:translate-x-0 " aria-label="Sidebar">
   <div className="h-full px-3 pt-3 pb-4 overflow-y-auto  ">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/member" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaGithub className='scale-150' />
               <span className="ms-3">Tech Blogs</span>
            </Link>
         </li>
         <li>
            <Link href="/member/chatbot" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <MdAssistant className='scale-150' />
               <span className="ms-3">AI Assistant</span>
            </Link>
         </li>
         <li>
            <Link href="/member/class" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RiVideoAddFill className='scale-150' />
               <span className="ms-3">Virtual Classroom</span>
            </Link>
         </li>
         <li>
            <Link href="/member/summary" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <BsFillJournalBookmarkFill className='scale-150' />
               <span className="ms-3">AI Summarizer</span>
            </Link>
         </li>
         <li>
            <Link href="content" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <TfiWrite className='scale-150' />
               <span className="ms-3">Content Writer</span>
            </Link>
         </li>
         <li>
            <Link href="/member/yt" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <TfiYoutube className='scale-150' />
               <span className="ms-3">Youtube Support</span>
            </Link>
         </li>
         <div className="divider divider-neutral"></div>
         <li>
            <Link href="/member/community" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RiCommunityFill className='scale-150' />
               <span className="ms-3">Community</span>
            </Link>
         </li>

         <li>
            <Link href="/member/courses" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <TbTargetArrow className='scale-150' />
               <span className="ms-3">Courses</span>
            </Link>
         </li>

         <li>
            <Link href="/member/profile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-500 hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RiAccountPinBoxFill className='scale-150' />
               <span className="ms-3">My Profile</span>
            </Link>
         </li>
         
      </ul>
   </div>
</aside>



    </div>
  )
}

export default MemSidebar
