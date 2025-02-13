'use client'
import React from 'react'
import axios from 'axios';
import MemSidebar from '@/components/memSidebar'
import Link from 'next/link';
const Index =({course}) => {
   console.log(course)
  return (
    <div>
      <MemSidebar />

      <div className="p-4 sm:ml-64">
      
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className='w-full flex justify-center items-center font-bold text-3xl'>Our Courses</div>
      {/* <input type="checkbox" value="dark" className="toggle theme-controller" /> */}

      <div>
      <div className=" md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {course.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={blog.imgurl} alt="Blog Post 1" className="w-full h-52 object-top" />
            <div className="p-6">
               <div className='flex justify-start gap-5 mb-2'>
                  <span><b>Name : </b>{blog.name} </span>
                  <span><b>Launch : </b>{blog.launch} </span>
               </div>
               <div className='flex justify-start gap-5 mb-2'>
                  <span><b>Price : </b> {blog.price}</span>
                  <span><Link href={`/member/courses/course?id=${blog._id}`}><button className="btn btn-primary">Primary</button></Link></span>
               </div>
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/course`)

    const course = res.data.data
    console.log(course)
  return {
    props: {course : JSON.parse(JSON.stringify(course))},
  }; 
}

export default Index 
