'use client'
import React from 'react'
import axios from 'axios';
import MemSidebar from '@/components/memSidebar'
import { log } from 'console';
import Link from 'next/link';
const Index =({blogs}) => {
   console.log(blogs)
  return (
    <div>
      <MemSidebar />

      <div className="p-4 sm:ml-64">
      
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className='w-full flex justify-center items-center font-bold text-3xl'>Tech Blogs</div>
      {/* <input type="checkbox" value="dark" className="toggle theme-controller" /> */}

      <div>
      <div className=" md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {blogs.map((blog) => (
            <div key={blog.title} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={blog.newsImgSrc} alt="Blog Post 1" className="w-full h-52 object-top" />
            <div className="p-6">
               <div className='flex justify-start gap-5 mb-2'>
                  <span><b>Date:</b> {blog.newsDatePublished}</span>
                  <span><b>Read:</b> {blog.newsTimetoRead}</span>
               </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.newsTitle}</h3>
              <p className="text-gray-600 text-sm">{blog.newsSubHeadline}</p>
              <Link href={blog.newsUrl} className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</Link>
            </div>
          </div>
         ))} 
          
        </div>
      </div>
    </div>
      </div>
   </div>
</div>
    </div>
  )
}

export async function getServerSideProps() {
   const options = {
      method: 'GET',
      url: 'https://ieee-spectrum-api.p.rapidapi.com/api',
      headers: {
        'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
        'x-rapidapi-host': 'ieee-spectrum-api.p.rapidapi.com'
      }
    };
    
    
        const response = await axios.request(options);
       let blogs = response.data;

       return{
         props:{blogs: JSON.parse(JSON.stringify(blogs))} // will be passed to page components as props
       }    
}

export default Index 
