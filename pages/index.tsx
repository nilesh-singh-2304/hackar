import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Users, ArrowRight, Sparkles, Lightbulb, Zap, ChevronRight } from "lucide-react"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Spline from '@splinetool/react-spline';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({delay : 2000})])


  return (
//    <>
//    {/* <div >
//    <Navbar/>
//     <div className="font-sans max-w-7xl max-md:max-w-md mx-auto">
//       <div className="grid md:ml-16 md:grid-cols-2 mt-5 items-center md:gap-8 gap-6">
//         <div className="max-md:order-1 max-md:text-center mt-8 z-50 relative">
//           <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]"><span className="text-blue-600">Smart</span> Business with <span className="text-blue-600">Smart</span> People</h2>
//           <p className="text-gray-600 mt-6 text-base leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>

//           <button type='button'
//             className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5">Get Started</button>

//           <div className="mt-12">
//             <div className="grid sm:grid-cols-3 gap-4 items-center">
//               <div className="flex flex-col items-center text-center">
//                 <h5 className="text-gray-800 font-bold text-xl mb-2">10+</h5>
//                 <p className="text-gray-600">Years Experience</p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <h5 className="text-gray-800 font-bold text-xl mb-2">890</h5>
//                 <p className="text-gray-600">Cases Solved</p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <h5 className="text-gray-800 font-bold text-xl mb-2">250</h5>
//                 <p className="text-gray-600">Business Partners</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <img src="https://www.stellarisvp.com/wp-content/uploads/2022/11/Mar2019_blog_Edtech.png" className="rounded-md lg:w-4/5 mb-8 z-50 relative" alt="Dining Experience" />
//       </div>

//       <div className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12">
//         <div className="bg-white p-6 shadow rounded-md">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 32 32">
//             <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
//             <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
//           </svg>
//           <h3 className="text-gray-800 text-xl font-bold mb-2">Customization</h3>
//           <p className="text-sm text-gray-600">Tailor our product to suit your needs.</p>
//           <a href="javascript:void(0);" className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
//         </div>
//         <div className="bg-white p-6 shadow rounded-md">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 512.001 512.001">
//             <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
//           </svg>
//           <h3 className="text-gray-800 text-xl font-bold mb-2">Support</h3>
//           <p className="text-sm text-gray-600">24/7 customer support htmlFor all your inquiries.</p>
//           <a href="javascript:void(0);" className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
//         </div>
//         <div className="bg-white p-6 shadow rounded-md">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md" viewBox="0 0 24 24">
//             <g fill-rule="evenodd" clip-rule="evenodd">
//               <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
//               <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
//               <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
//             </g>
//           </svg>
//           <h3 className="text-gray-800 text-xl font-bold mb-2">Performance</h3>
//           <p className="text-sm text-gray-600">Experience blazing-fast performance with our product.</p>
//           <a href="javascript:void(0);" className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
//         </div>
//       </div>
//     </div>

   

//     <div className=" py-6 sm:py-8 lg:py-12">
//   <div className="mx-auto max-w-screen-lg px-4 md:px-8">
    
//     <div className="mb-10 md:mb-16">
//       <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Choose a Bundle</h2>

//       <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
//     </div>
    

//     <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
      
//       <div className="w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
//         <div className="mb-4">
//           <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">Basic Bundle</h3>
//           <p className="text-gray-300">Ebook</p>
//         </div>

//         <div className="mb-4 space-x-2">
//           <span className="text-4xl font-bold text-gray-100">$29</span>
//           <span className="text-2xl text-gray-300 line-through">$49</span>
//         </div>

//         <ul className="mb-6 space-y-2 text-gray-300">
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Ebook</span>
//           </li>
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Multiple examples</span>
//           </li>
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Basic support</span>
//           </li>
          
//         </ul>

//         <a href="#" className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">Get the Basic Bundle</a>
//       </div>
      
//       <div className="w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
//         <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
//           <div>
//             <h3 className="text-2xl font-semibold text-white sm:text-3xl">Pro Bundle</h3>
//             <p className="text-indigo-100">Ebook + Video course</p>
//           </div>

//           <span className="order-first inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">Best value</span>
//         </div>

//         <div className="mb-4 space-x-2">
//           <span className="text-4xl font-bold text-white">$49</span>
//           <span className="text-2xl text-indigo-100 line-through">$89</span>
//         </div>

//         <ul className="mb-6 space-y-2 text-indigo-100">
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Ebook</span>
//           </li>
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Video course</span>
//           </li>
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Multiple examples</span>
//           </li>
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Work sheets</span>
//           </li>
          
//           <li className="flex items-center gap-1.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//             </svg>

//             <span>Premium support</span>
//           </li>
          
//         </ul>

//         <a href="#" className="block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base">Get the Pro Bundle</a>
//       </div>
      
//     </div>
//   </div>
// </div>



// <div className="font-[sans-serif] px-6 py-16 ">
//       <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
//         <p className="text-sm font-bold text-blue-600 mb-4"><span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE IN READYMADEUI</p>
//         <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">Call To Action Section, Elevate Your Experience</h2>
//         <div className="mt-8">
//           <p className="text-base text-gray-500 leading-relaxed">Upgrade to our premium plan and unlock a world of possibilities. Enjoy exclusive features, enhanced performance, and a seamless journey towards success.</p>
//         </div>

//         <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
//           <input type='email' placeholder='Enter your email' className="w-full outline-none bg-white pl-4 text-gray-800 text-sm" />
//           <button type='button'
//             className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2.5">Subscribe</button>
//         </div>
//       </div>
//     </div>


   

//     <div className="flex flex-col justify-center items-center w-fit mt-10">
//         <p className="text-white text-3xl font-extrabold text-center">Our Alumni</p>
//         <div className="embla " ref={emblaRef}>
          
//       <div className="embla__container w-auto text-center h-auto">
//         <div className="embla__slide">
//         <div className="max-w-4xl bg-gray-800 rounded-xl border border-gray-700 mx-auto p-16 my-5 font-[sans-serif]">

//           <div className="grid md:grid-cols-3 items-center gap-12">
//               <div>
//                   <img src='https://readymadeui.com/profile_5.webp' className="w-[280px] rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)]" />
//               </div>

//               <div className="md:col-span-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-secondary inline rotate-180" viewBox="0 0 475.082 475.081">
//                       <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
//                   </svg>

//                   <p className="text-gray-50 text-sm mt-6 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>


//                   <div className="mt-4">
//                       <p className="text-gray-50 text-base font-semibold">Simon Konecki</p>
//                       <p className="text-xs text-gray-400 mt-0.5">Founder of Labar</p>
//                   </div>

//                   <div className="flex justify-end mt-4 space-x-4">
//                       <div className="bg-info text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer">
                      
//                       </div>
//                       <div className="bg-secondary text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                      
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//         </div>
//         <div className="embla__slide">
//         <div className="max-w-4xl bg-gray-800 rounded-xl border border-gray-700 mx-auto p-16 my-5 font-[sans-serif]">

//           <div className="grid md:grid-cols-3 items-center gap-12">
//               <div>
//                   <img src='https://readymadeui.com/profile_5.webp' className="w-[280px] rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)]" />
//               </div>

//               <div className="md:col-span-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-secondary inline rotate-180" viewBox="0 0 475.082 475.081">
//                       <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000"></path>
//                   </svg>

//                   <p className="text-gray-50 text-sm mt-6 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>


//                   <div className="mt-4">
//                       <p className="text-gray-50 text-base font-semibold">Simon Konecki</p>
//                       <p className="text-xs text-gray-400 mt-0.5">Founder of Labar</p>
//                   </div>

//                   <div className="flex justify-end mt-4 space-x-4">
//                       <div className="bg-info text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full shrink-0 cursor-pointer">
                      
//                       </div>
//                       <div className="bg-secondary text-white text-2xl w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                     
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//         </div>
//       </div>
//     </div>
//         </div>

        

//         <div className=" px-4 py-10 font-[sans-serif]">
//       <div className="max-w-7xl max-md:max-w-lg mx-auto">
//         <h2 className="text-3xl font-extrabold text-[#333]">LATEST BLOGS</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           <div className="bg-white cursor-pointer rounded overflow-hidden group">
//             <div className="relative overflow-hidden">
//               <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">June 10, 2023</div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
//               <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//           <div className="bg-white cursor-pointer rounded overflow-hidden group">
//             <div className="relative overflow-hidden">
//               <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">April 20, 2023</div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
//               <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//           <div className="bg-white cursor-pointer rounded overflow-hidden group">
//             <div className="relative overflow-hidden">
//               <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
//               <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//           <div className="bg-white cursor-pointer rounded overflow-hidden group">
//             <div className="relative overflow-hidden">
//               <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
//               <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//           <div className="bg-white cursor-pointer rounded overflow-hidden group">
//             <div className="relative overflow-hidden">
//               <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
//               <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//           <div className="bg-white cursor-pointer rounded overflow-hidden group">
//             <div className="relative overflow-hidden">
//               <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
//               <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
//               <button type="button" className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


    

//     <div className="my-4 font-[sans-serif] max-w-6xl max-md:max-w-lg mx-auto">
//       <div className="md:mb-28 mb-12 text-center">
//         <h2 className="text-gray-800 text-3xl font-extrabold">What our happy client say</h2>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6 relative">
//         <div
//           className="bg-gradient-to-tr from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] max-w-[65%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
//         </div>

//         <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
//           <div>
//             <img src="https://readymadeui.com/profile_2.webp" className="w-10 h-10 rounded-full" />
//             <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">John Doe</h4>
//             <p className="mt-0.5 text-xs text-gray-600">Founder of Rubik</p>
//           </div>
//           <div className="mt-4">
//             <p className="text-gray-600 text-sm leading-relaxed">The service was amazing. I never had to wait that long htmlFor my food.
//               The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//           </div>
//         </div>

//         <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
//           <div>
//             <img src="https://readymadeui.com/profile_3.webp" className="w-10 h-10 rounded-full" />
//             <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Mark Adair</h4>
//             <p className="mt-0.5 text-xs text-gray-600">Founder of Alpha</p>
//           </div>
//           <div className="mt-4">
//             <p className="text-gray-600 text-sm leading-relaxed">The service was amazing. I never had to wait that long htmlFor my food.
//               The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//           </div>
//         </div>

//         <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
//           <div>
//             <img src="https://readymadeui.com/profile_4.webp" className="w-10 h-10 rounded-full" />
//             <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Simon Konecki</h4>
//             <p className="mt-0.5 text-xs text-gray-600">Founder of Labar</p>
//           </div>
//           <div className="mt-4">
//             <p className="text-gray-600 text-sm leading-relaxed">The service was amazing. I never had to wait that long htmlFor my food.
//               The staff was friendly and attentive, and the delivery was impressively prompt.</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     <Footer/>
//    </div> */}
   
//    </>
<div>


<div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-background to-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <div className="relative">
              <BookOpen className="h-6 w-6 text-primary" />
              <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">QuestEd</span>
          </Link>
          {/* <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="rounded-full px-4 text-sm font-medium" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div> */}
          <div
              className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end"
            >
              <SignedOut>
                <button className="btn btn-sm btn bg-black text-white"><SignInButton /></button>
                <button className="btn ml-2 btn-sm btn bg-black text-white">Sign-up</button>
              </SignedOut>
      
      <SignedIn>
              <UserButton />
             <Link href={"/member"}><button className="btn ml-2 btn-sm btn bg-black text-white">Member</button></Link> 
            </SignedIn>
            </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b bg-background py-24 md:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
          <div className="container relative">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                <span className="mr-1 rounded-full bg-primary/20 px-1.5 py-0.5 text-xs font-medium text-primary">
                  New
                </span>
                <span className="text-muted-foreground">AI-powered learning paths</span>
                <ChevronRight className="ml-1 h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Learn Smarter with{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  QuestEd
                </span>
              </h1>
              <p className="max-w-[750px] text-lg text-muted-foreground md:text-xl">
                Personalized learning experiences tailored to your unique needs. Master new skills at your own pace with
                our intelligent tutoring system.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2 rounded-full px-6">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6">
                  Learn More
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>10k+ Students</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-muted-foreground/30"></div>
                <div className="flex items-center gap-1">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span>500+ Courses</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-muted-foreground/30"></div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Expert Mentors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20 md:py-28">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Why Choose QuestEd?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Our platform combines cutting-edge AI with proven educational methods to deliver an unmatched learning
              experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Personalized Learning</h3>
              <p className="mb-4 text-muted-foreground">
                AI-driven content that adapts to your learning style and pace for maximum retention and engagement.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-primary">
                Learn more <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Extensive Library</h3>
              <p className="mb-4 text-muted-foreground">
                Access thousands of courses across various subjects and disciplines, updated regularly with new content.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-primary">
                Browse courses <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community Learning</h3>
              <p className="mb-4 text-muted-foreground">
                Connect with peers and experts to enhance your educational journey through collaborative projects.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-primary">
                Join community <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-muted py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/0"></div>
          <div className="container relative">
            <div className="mx-auto max-w-[800px] rounded-2xl border bg-card p-8 shadow-lg md:p-12">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to transform your learning?
                </h2>
                <p className="mb-8 text-muted-foreground md:text-lg">
                  Join thousands of students already experiencing the future of education with QuestEd.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <div className="w-full max-w-sm">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 rounded-full border-muted-foreground/20 px-4"
                    />
                  </div>
                  <Button size="lg" className="h-12 rounded-full px-6">
                    Get Started Free
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">No credit card required. Free 14-day trial.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="relative">
                <BookOpen className="h-5 w-5 text-primary" />
                <Sparkles className="absolute -right-1 -top-1 h-3 w-3 text-primary" />
              </div>
              <span className="text-sm font-bold">QuestEd</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground">
                Courses
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} QuestEd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
   {/* <nav
      className="py-5 border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed"
      id="topnav"
    >
      <div className="mx-auto max-w-7xl  lg:px-8">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex justify-between lg:hidden px-4">
            <a href="https://pagedone.io/" className="flex items-center">
              <svg
                width="164"
                height="33"
                viewBox="0 0 164 33"
                fill="none"
                xmlns="http://www.w3.org/2000/pagedone.svg"
              >
                <path
                  d="M47 24.7231V7H54.4171C54.5916 7 54.816 7.00821 55.0903 7.02462C55.3645 7.03282 55.618 7.05744 55.8507 7.09846C56.8895 7.25436 57.7455 7.59487 58.4186 8.12C59.1001 8.64513 59.6029 9.30974 59.927 10.1138C60.2594 10.9097 60.4256 11.7959 60.4256 12.7723C60.4256 13.7405 60.2594 14.6267 59.927 15.4308C59.5945 16.2267 59.0876 16.8872 58.4061 17.4123C57.733 17.9374 56.8812 18.2779 55.8507 18.4338C55.618 18.4667 55.3604 18.4913 55.0778 18.5077C54.8035 18.5241 54.5833 18.5323 54.4171 18.5323H50.0042V24.7231H47ZM50.0042 15.7631H54.2925C54.4587 15.7631 54.6457 15.7549 54.8534 15.7385C55.0612 15.7221 55.2523 15.6892 55.4268 15.64C55.9255 15.5169 56.3161 15.2995 56.5986 14.9877C56.8895 14.6759 57.0931 14.3231 57.2094 13.9292C57.3341 13.5354 57.3964 13.1497 57.3964 12.7723C57.3964 12.3949 57.3341 12.0092 57.2094 11.6154C57.0931 11.2133 56.8895 10.8564 56.5986 10.5446C56.3161 10.2328 55.9255 10.0154 55.4268 9.89231C55.2523 9.84308 55.0612 9.81436 54.8534 9.80615C54.6457 9.78974 54.4587 9.78154 54.2925 9.78154H50.0042V15.7631Z"
                  fill="#101828"
                ></path>
                <path
                  d="M66.0975 25.0923C65.1252 25.0923 64.3024 24.9118 63.6293 24.5508C62.9561 24.1815 62.445 23.6933 62.096 23.0862C61.7553 22.479 61.5849 21.8103 61.5849 21.08C61.5849 20.44 61.6929 19.8656 61.909 19.3569C62.1251 18.84 62.4575 18.3969 62.9063 18.0277C63.355 17.6503 63.9368 17.3426 64.6515 17.1046C65.1917 16.9323 65.8233 16.7764 66.5463 16.6369C67.2776 16.4974 68.0671 16.3703 68.9148 16.2554C69.7707 16.1323 70.6641 16.001 71.5949 15.8615L70.5228 16.4646C70.5311 15.5456 70.3234 14.8687 69.8995 14.4338C69.4757 13.999 68.761 13.7815 67.7554 13.7815C67.1488 13.7815 66.5629 13.921 65.9978 14.2C65.4327 14.479 65.0379 14.959 64.8135 15.64L62.0711 14.7908C62.4035 13.6667 63.0351 12.7641 63.9659 12.0831C64.9049 11.4021 66.1681 11.0615 67.7554 11.0615C68.9522 11.0615 70.0034 11.2544 70.9093 11.64C71.8234 12.0256 72.5007 12.6574 72.9412 13.5354C73.1822 14.0031 73.3276 14.4831 73.3775 14.9754C73.4274 15.4595 73.4523 15.9887 73.4523 16.5631V24.7231H70.822V21.8431L71.2583 22.3108C70.6517 23.2708 69.9411 23.9764 69.1267 24.4277C68.3206 24.8708 67.3108 25.0923 66.0975 25.0923ZM66.6959 22.7292C67.3773 22.7292 67.9591 22.6103 68.4411 22.3723C68.9231 22.1344 69.3054 21.8431 69.5879 21.4985C69.8788 21.1538 70.0741 20.8297 70.1738 20.5262C70.3317 20.1487 70.419 19.7179 70.4356 19.2338C70.4605 18.7415 70.473 18.3436 70.473 18.04L71.3954 18.3108C70.4896 18.4503 69.7126 18.5733 69.0643 18.68C68.4161 18.7867 67.8593 18.8892 67.3939 18.9877C66.9286 19.0779 66.5172 19.1805 66.1598 19.2954C65.8108 19.4185 65.5158 19.5621 65.2748 19.7262C65.0338 19.8903 64.8468 20.079 64.7138 20.2923C64.5891 20.5056 64.5268 20.7559 64.5268 21.0431C64.5268 21.3713 64.6099 21.6626 64.7761 21.9169C64.9423 22.1631 65.1833 22.36 65.4991 22.5077C65.8233 22.6554 66.2222 22.7292 66.6959 22.7292Z"
                  fill="#101828"
                ></path>
                <path
                  d="M82.1078 31C81.3598 31 80.641 30.8851 79.9512 30.6554C79.2698 30.4256 78.6548 30.0933 78.1063 29.6585C77.5578 29.2318 77.109 28.7149 76.76 28.1077L79.5274 26.7538C79.785 27.2379 80.1465 27.5949 80.6119 27.8246C81.0856 28.0626 81.5884 28.1815 82.1203 28.1815C82.7435 28.1815 83.3003 28.0708 83.7907 27.8492C84.281 27.6359 84.6591 27.3159 84.925 26.8892C85.1993 26.4708 85.3281 25.9456 85.3115 25.3138V21.5354H85.6855V11.4308H88.3157V25.3631C88.3157 25.6995 88.2991 26.0195 88.2659 26.3231C88.2409 26.6349 88.1952 26.9385 88.1287 27.2338C87.9293 28.0954 87.547 28.801 86.9819 29.3508C86.4168 29.9087 85.7145 30.3231 84.8752 30.5938C84.0441 30.8646 83.1217 31 82.1078 31ZM81.846 25.0923C80.6077 25.0923 79.5274 24.7846 78.6049 24.1692C77.6825 23.5538 76.9678 22.7169 76.4608 21.6585C75.9539 20.6 75.7004 19.4062 75.7004 18.0769C75.7004 16.7313 75.9539 15.5333 76.4608 14.4831C76.9761 13.4246 77.7032 12.5918 78.6423 11.9846C79.5814 11.3692 80.6867 11.0615 81.9582 11.0615C83.238 11.0615 84.3101 11.3692 85.1744 11.9846C86.047 12.5918 86.7076 13.4246 87.1564 14.4831C87.6052 15.5415 87.8296 16.7395 87.8296 18.0769C87.8296 19.3979 87.6052 20.5918 87.1564 21.6585C86.7076 22.7169 86.0387 23.5538 85.1494 24.1692C84.2602 24.7846 83.1591 25.0923 81.846 25.0923ZM82.3072 22.4338C83.1134 22.4338 83.7616 22.2533 84.2519 21.8923C84.7505 21.5231 85.112 21.0103 85.3364 20.3538C85.5691 19.6974 85.6855 18.9385 85.6855 18.0769C85.6855 17.2072 85.5691 16.4482 85.3364 15.8C85.112 15.1436 84.7588 14.6349 84.2768 14.2738C83.7948 13.9046 83.1715 13.72 82.407 13.72C81.6008 13.72 80.936 13.9169 80.4124 14.3108C79.8889 14.6964 79.5024 15.2215 79.2531 15.8862C79.0038 16.5426 78.8792 17.2728 78.8792 18.0769C78.8792 18.8892 78.9997 19.6277 79.2407 20.2923C79.49 20.9487 79.8681 21.4697 80.375 21.8554C80.882 22.241 81.5261 22.4338 82.3072 22.4338Z"
                  fill="#101828"
                ></path>
                <path
                  d="M97.6827 25.0923C96.3198 25.0923 95.1231 24.801 94.0926 24.2185C93.0621 23.6359 92.256 22.8277 91.6743 21.7938C91.1008 20.76 90.8141 19.5703 90.8141 18.2246C90.8141 16.7723 91.0967 15.5128 91.6618 14.4462C92.2269 13.3713 93.0122 12.5385 94.0178 11.9477C95.0234 11.3569 96.1869 11.0615 97.5082 11.0615C98.9044 11.0615 100.089 11.3856 101.061 12.0338C102.042 12.6738 102.769 13.5805 103.242 14.7538C103.716 15.9272 103.895 17.3097 103.778 18.9015H100.799V17.8185C100.791 16.3744 100.533 15.32 100.026 14.6554C99.5194 13.9908 98.7216 13.6585 97.6329 13.6585C96.4029 13.6585 95.4888 14.0359 94.8904 14.7908C94.2921 15.5374 93.9929 16.6328 93.9929 18.0769C93.9929 19.4226 94.2921 20.4646 94.8904 21.2031C95.4888 21.9415 96.3614 22.3108 97.5082 22.3108C98.2479 22.3108 98.8836 22.1508 99.4155 21.8308C99.9557 21.5026 100.371 21.0308 100.662 20.4154L103.629 21.3015C103.114 22.4995 102.316 23.4308 101.235 24.0954C100.163 24.76 98.9792 25.0923 97.6827 25.0923ZM93.0455 18.9015V16.6615H102.308V18.9015H93.0455Z"
                  fill="#101828"
                ></path>
                <path
                  d="M111.708 25.0923C110.47 25.0923 109.39 24.7846 108.467 24.1692C107.545 23.5538 106.83 22.7169 106.323 21.6585C105.816 20.6 105.563 19.4062 105.563 18.0769C105.563 16.7313 105.816 15.5333 106.323 14.4831C106.838 13.4246 107.565 12.5918 108.505 11.9846C109.444 11.3692 110.549 11.0615 111.82 11.0615C113.1 11.0615 114.172 11.3692 115.037 11.9846C115.909 12.5918 116.57 13.4246 117.019 14.4831C117.467 15.5415 117.692 16.7395 117.692 18.0769C117.692 19.3979 117.467 20.5918 117.019 21.6585C116.57 22.7169 115.901 23.5538 115.012 24.1692C114.122 24.7846 113.021 25.0923 111.708 25.0923ZM112.169 22.4338C112.976 22.4338 113.624 22.2533 114.114 21.8923C114.613 21.5231 114.974 21.0103 115.199 20.3538C115.431 19.6974 115.548 18.9385 115.548 18.0769C115.548 17.2072 115.431 16.4482 115.199 15.8C114.974 15.1436 114.621 14.6349 114.139 14.2738C113.657 13.9046 113.034 13.72 112.269 13.72C111.463 13.72 110.798 13.9169 110.275 14.3108C109.751 14.6964 109.365 15.2215 109.115 15.8862C108.866 16.5426 108.741 17.2728 108.741 18.0769C108.741 18.8892 108.862 19.6277 109.103 20.2923C109.352 20.9487 109.73 21.4697 110.237 21.8554C110.744 22.241 111.388 22.4338 112.169 22.4338ZM115.548 24.7231V15.3938H115.174V7H118.203V24.7231H115.548Z"
                  fill="#101828"
                ></path>
                <path
                  d="M127.395 25.0923C126.049 25.0923 124.873 24.7928 123.867 24.1938C122.861 23.5949 122.08 22.7703 121.523 21.72C120.975 20.6615 120.701 19.4472 120.701 18.0769C120.701 16.6821 120.983 15.4595 121.548 14.4092C122.113 13.359 122.899 12.5385 123.904 11.9477C124.91 11.3569 126.073 11.0615 127.395 11.0615C128.749 11.0615 129.93 11.361 130.935 11.96C131.941 12.559 132.722 13.3877 133.279 14.4462C133.835 15.4964 134.114 16.7067 134.114 18.0769C134.114 19.4554 133.831 20.6738 133.266 21.7323C132.709 22.7826 131.928 23.6072 130.923 24.2062C129.917 24.7969 128.741 25.0923 127.395 25.0923ZM127.395 22.3108C128.592 22.3108 129.481 21.9169 130.062 21.1292C130.644 20.3415 130.935 19.3241 130.935 18.0769C130.935 16.7887 130.64 15.7631 130.05 15C129.46 14.2287 128.575 13.8431 127.395 13.8431C126.589 13.8431 125.924 14.0236 125.4 14.3846C124.885 14.7374 124.503 15.2338 124.253 15.8738C124.004 16.5056 123.879 17.24 123.879 18.0769C123.879 19.3651 124.174 20.3949 124.765 21.1662C125.363 21.9292 126.24 22.3108 127.395 22.3108Z"
                  fill="#101828"
                ></path>
                <path
                  d="M145.923 24.7231V18.3231C145.923 17.9046 145.894 17.441 145.836 16.9323C145.778 16.4236 145.64 15.9354 145.424 15.4677C145.217 14.9918 144.901 14.6021 144.477 14.2985C144.061 13.9949 143.496 13.8431 142.782 13.8431C142.399 13.8431 142.021 13.9046 141.647 14.0277C141.273 14.1508 140.933 14.3641 140.625 14.6677C140.326 14.9631 140.085 15.3733 139.902 15.8985C139.719 16.4154 139.628 17.08 139.628 17.8923L137.845 17.1415C137.845 16.0092 138.065 14.9836 138.506 14.0646C138.955 13.1456 139.611 12.4154 140.475 11.8738C141.34 11.3241 142.403 11.0492 143.667 11.0492C144.664 11.0492 145.487 11.2133 146.135 11.5415C146.783 11.8697 147.298 12.2882 147.681 12.7969C148.063 13.3056 148.345 13.8472 148.528 14.4215C148.711 14.9959 148.827 15.5415 148.877 16.0585C148.936 16.5672 148.965 16.9815 148.965 17.3015V24.7231H145.923ZM136.586 24.7231V11.4308H139.266V15.5538H139.628V24.7231H136.586Z"
                  fill="#101828"
                ></path>
                <path
                  d="M157.87 25.0923C156.507 25.0923 155.31 24.801 154.28 24.2185C153.249 23.6359 152.443 22.8277 151.861 21.7938C151.288 20.76 151.001 19.5703 151.001 18.2246C151.001 16.7723 151.284 15.5128 151.849 14.4462C152.414 13.3713 153.199 12.5385 154.205 11.9477C155.21 11.3569 156.374 11.0615 157.695 11.0615C159.091 11.0615 160.276 11.3856 161.248 12.0338C162.229 12.6738 162.956 13.5805 163.43 14.7538C163.903 15.9272 164.082 17.3097 163.966 18.9015H160.986V17.8185C160.978 16.3744 160.72 15.32 160.213 14.6554C159.706 13.9908 158.909 13.6585 157.82 13.6585C156.59 13.6585 155.676 14.0359 155.078 14.7908C154.479 15.5374 154.18 16.6328 154.18 18.0769C154.18 19.4226 154.479 20.4646 155.078 21.2031C155.676 21.9415 156.548 22.3108 157.695 22.3108C158.435 22.3108 159.071 22.1508 159.603 21.8308C160.143 21.5026 160.558 21.0308 160.849 20.4154L163.816 21.3015C163.301 22.4995 162.503 23.4308 161.423 24.0954C160.351 24.76 159.166 25.0923 157.87 25.0923ZM153.233 18.9015V16.6615H162.495V18.9015H153.233Z"
                  fill="#101828"
                ></path>
                <path
                  d="M24.5473 11.8941C25.1905 12.5063 25.2068 13.5149 24.5837 14.1468L18.7585 20.054C18.1354 20.686 17.1087 20.702 16.4654 20.0898C15.8222 19.4776 15.8059 18.469 16.429 17.8371L22.2542 11.9299C22.8773 11.2979 23.904 11.2819 24.5473 11.8941Z"
                  fill="url(#paint0_linear_6727_44729)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 4.54673C0 2.03564 2.07211 0 4.62819 0H21.5399V0.00124069C28.9908 0.0998525 35 6.06429 35 13.4075C35 20.8123 28.8897 26.8151 21.3523 26.8151C18.6648 26.8151 16.1587 26.052 14.0463 24.7342L6.58815 31.9057C4.13431 34.2652 0 32.5573 0 29.1841V4.54673ZM11.5194 22.7055C9.15709 20.295 7.70452 17.0179 7.70452 13.4075C7.70452 12.5277 8.43056 11.8144 9.32619 11.8144C10.2218 11.8144 10.9479 12.5277 10.9479 13.4075C10.9479 19.0526 15.6061 23.6288 21.3523 23.6288C27.0985 23.6288 31.7567 19.0526 31.7567 13.4075C31.7567 7.76248 27.0985 3.18626 21.3523 3.18626H4.62819C3.86336 3.18626 3.24334 3.79536 3.24334 4.54673V29.1841C3.24334 29.7351 3.91866 30.014 4.31948 29.6286L11.5194 22.7055Z"
                  fill="url(#paint1_linear_6727_44729)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_6727_44729"
                    x1="31.5325"
                    y1="2.21268"
                    x2="1.00231"
                    y2="33.2898"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9038FF"></stop>
                    <stop offset="0.993738" stop-color="#5551FF"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_6727_44729"
                    x1="31.5325"
                    y1="2.21268"
                    x2="1.00231"
                    y2="33.2898"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9038FF"></stop>
                    <stop offset="0.993738" stop-color="#5551FF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <button
              data-collapse-toggle="navbar"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/pagedone.svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 " id="navbar">
            <ul
              className="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row"
            >
              <li>
                <a
                  href="javascript:;"
                  className="text-green-300 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >Home</a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-green-300 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >About us</a>
              </li>

              <li className="relative">
                <button
                  data-target="megamenu"
                  className="dropdown-toggle flex items-center justify-between text-green-300 text-sm lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left  lg:m-0 hover:text-gray-900"
                >
                  Products
                  <svg
                    className="w-3 h-2 ml-1.5 dropdown-active-rotate-180"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/pagedone.svg"
                  >
                    <path
                      d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                
                <div
                  id="megamenu"
                  aria-labelledby="megamenu"
                  className="animate-fade z-10 relative lg:absolute top-2 lg:top-14  lg:-left-20 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open hidden"
                >
                </div>
              </li>
            </ul>
            
            <div
              className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end"
            >
              <SignedOut>
                <button className="btn btn-sm btn-success"><SignInButton /></button>
                <button className="btn ml-2 btn-sm btn-success">Sign-up</button>
              </SignedOut>
      
      <SignedIn>
              <UserButton />
             <Link href={"/member"}><button className="btn ml-2 btn-sm btn-success">Member</button></Link> 
            </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav> */}

    {/* <div className="h-screen w-full">
      <Spline
        scene="https://prod.spline.design/64rr6dXy3jn-wu3N/scene.splinecode" 
      />
    </div> */}


    {/* <section
      className="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div
          className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4"
        >
          <span className="font-inter text-xs font-medium text-gray-200 ml-3"
            >Explore how to use htmlFor brands.</span>
          <a
            href="javascript:;"
            className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <h1
          className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-100 mb-5 md:text-5xl leading-[50px]"
        >
          Unlock Your Potential, Learn 
          <span className="text-indigo-600"> Without Limits </span>
        </h1>
        <p
          className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9"
        >
          Revolutionizing education with AI-Implementation and real-time feedback for a truly personalized experience.
        </p>
        <Link href={'/member'} ><button className="btn mb-3 btn-active btn-neutral">Member Section</button></Link>
        <div className="flex justify-center">
          <img
            src="https://pagedone.io/asset/uploads/1691054543.png"
            alt="Dashboard image" className="rounded-t-3xl h-auto object-cover"
          />
        </div>
      </div>
    </section> */}




                                                    {/* <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="xl:p-24 gap-32 p-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex  justify-between flex-col-reverse lg:flex-row">
              <div className="w-full lg:w-2/6 relative">
                  <img src="https://pagedone.io/asset/uploads/1696241449.png" alt="CTA tailwind section" className="xl:absolute xl:bottom-0 rounded-t-3xl -mb-12 mx-auto lg:-mb-12 xl:-mb-24 lg:mx-0 object-cover"/>
              </div>
              <div className="w-full lg:w-2/3">
                  <h2 className="font-manrope text-5xl text-white font-semibold mb-7 text-center lg:text-left">Get ready to join QuestED </h2>
                  <p className="text-lg text-white leading-8 mb-12 text-center lg:text-left">Download our app now from app stores & play store and experience the ease of financing on your finger tips.</p>
                  <div className="flex items-center flex-col gap-7 md:flex-row lg:justify-start justify-center">
                      <a href="javascript:;"  className="cursor-pointer ">
                       <svg width="134" height="45" viewBox="0 0 134 45" fill="none" xmlns="http://www.w3.org/2000/pagedone.svg">
                          <g clip-path="url(#clip0_8866_64159)">
                          <path d="M123.217 1.93565e-06H10.6672C10.257 1.93565e-06 9.85164 1.93575e-06 9.44247 0.00225194C9.09995 0.00450194 8.76016 0.0110382 8.41436 0.0165394C7.66311 0.025429 6.91363 0.0918877 6.17243 0.215338C5.43227 0.341476 4.7153 0.579282 4.04576 0.920713C3.37704 1.26503 2.76602 1.71244 2.23485 2.24671C1.70089 2.77947 1.25579 3.39527 0.916674 4.07043C0.576621 4.74425 0.340826 5.46631 0.217435 6.21167C0.0928712 6.95609 0.0258421 7.70909 0.0169496 8.46392C0.00656725 8.80884 0.00547084 9.15491 0 9.49988V35.5034C0.00547084 35.8527 0.00656725 36.1911 0.0169496 36.5406C0.0258448 37.2954 0.0928739 38.0483 0.217435 38.7927C0.340486 39.5385 0.576294 40.261 0.916674 40.935C1.25564 41.608 1.7008 42.2213 2.23485 42.7511C2.764 43.2878 3.37542 43.7355 4.04576 44.0772C4.7153 44.4195 5.43219 44.6587 6.17243 44.7868C6.91376 44.9093 7.66316 44.9758 8.41436 44.9857C8.76016 44.9934 9.09995 44.9978 9.44247 44.9978C9.85163 45 10.257 45 10.6672 45H123.217C123.619 45 124.027 45 124.43 44.9978C124.77 44.9978 125.12 44.9934 125.461 44.9857C126.211 44.9763 126.959 44.9098 127.699 44.7868C128.441 44.6578 129.161 44.4187 129.833 44.0772C130.503 43.7353 131.114 43.2876 131.643 42.7511C132.175 42.2192 132.621 41.6064 132.965 40.935C133.302 40.2605 133.536 39.5381 133.657 38.7927C133.782 38.0482 133.851 37.2954 133.865 36.5406C133.869 36.1911 133.869 35.8527 133.869 35.5034C133.878 35.0947 133.878 34.6883 133.878 34.2729V10.7281C133.878 10.3162 133.878 9.90747 133.869 9.49988C133.869 9.15491 133.869 8.80884 133.865 8.46387C133.851 7.70898 133.782 6.95614 133.657 6.21162C133.536 5.46669 133.302 4.74469 132.965 4.07039C132.274 2.7171 131.179 1.61553 129.833 0.920612C129.161 0.580015 128.441 0.342272 127.699 0.215237C126.959 0.0912426 126.211 0.0247607 125.461 0.0163819C125.12 0.0108919 124.77 0.00429944 124.43 0.00210569C124.027 -0.000144314 123.619 1.93565e-06 123.217 1.93565e-06Z" fill="black"/>
                          <path d="M9.44793 44.0157C9.10705 44.0157 8.77442 44.0113 8.43622 44.0037C7.73562 43.9945 7.03666 43.9332 6.34506 43.8202C5.70018 43.7085 5.07547 43.5008 4.49153 43.2038C3.91294 42.9093 3.38523 42.5232 2.92859 42.0601C2.46535 41.6026 2.07968 41.0719 1.78686 40.4891C1.49082 39.9025 1.28594 39.2738 1.17937 38.6247C1.06427 37.9274 1.002 37.2222 0.993088 36.5154C0.985995 36.2781 0.976709 35.4881 0.976709 35.4881V9.49999C0.976709 9.49999 0.986599 8.72216 0.993144 8.49363C1.00168 7.7879 1.06358 7.08384 1.17834 6.38756C1.28511 5.73677 1.49015 5.1062 1.78635 4.51769C2.07809 3.9353 2.46162 3.4042 2.92207 2.945C3.382 2.48143 3.91141 2.09329 4.49098 1.79472C5.07358 1.49872 5.69711 1.29243 6.34069 1.18279C7.03455 1.06868 7.73594 1.00698 8.43897 0.998221L9.44847 0.984485H124.424L125.446 0.998772C126.142 1.0071 126.837 1.06824 127.525 1.18169C128.175 1.29271 128.805 1.50043 129.394 1.79802C130.555 2.39972 131.5 3.35167 132.096 4.52044C132.388 5.10488 132.589 5.7303 132.695 6.37547C132.811 7.07748 132.876 7.78707 132.889 8.49858C132.893 8.81718 132.893 9.15941 132.893 9.49999C132.901 9.92187 132.901 10.3234 132.901 10.7283V34.273C132.901 34.6817 132.901 35.0805 132.893 35.4826C132.893 35.8485 132.892 36.1836 132.888 36.5285C132.875 37.2273 132.811 37.9243 132.697 38.6137C132.593 39.2674 132.389 39.9011 132.093 40.4925C131.798 41.0689 131.414 41.595 130.957 42.0514C130.5 42.5169 129.971 42.9053 129.391 43.2017C128.803 43.5009 128.174 43.7094 127.525 43.8202C126.833 43.9338 126.134 43.9951 125.434 44.0037C125.106 44.0113 124.763 44.0157 124.43 44.0157L123.217 44.018L9.44793 44.0157Z" fill="white"/>
                          <path d="M27.9654 22.3759C27.9779 21.3994 28.2359 20.442 28.7152 19.5927C29.1946 18.7434 29.8798 18.0299 30.7071 17.5184C30.1815 16.7637 29.4882 16.1425 28.6822 15.7043C27.8761 15.2662 26.9796 15.023 26.0637 14.9942C24.1101 14.788 22.2161 16.1697 21.2205 16.1697C20.2057 16.1697 18.6729 15.0147 17.0223 15.0488C15.9547 15.0835 14.9142 15.3957 14.0022 15.955C13.0902 16.5142 12.3379 17.3015 11.8184 18.2401C9.56845 22.1574 11.2467 27.9144 13.4021 31.0809C14.4805 32.6314 15.7408 34.3633 17.3899 34.3019C19.0036 34.2346 19.6063 33.2672 21.5542 33.2672C23.484 33.2672 24.0495 34.3019 25.732 34.2628C27.4636 34.2346 28.5546 32.7055 29.5952 31.1403C30.37 30.0355 30.9662 28.8144 31.3617 27.5224C30.3557 27.0945 29.4972 26.3783 28.8932 25.4631C28.2893 24.5479 27.9666 23.4742 27.9654 22.3759Z" fill="black"/>
                          <path d="M24.7874 12.9118C25.7316 11.772 26.1967 10.3071 26.0841 8.82812C24.6416 8.98047 23.3092 9.67369 22.3523 10.7697C21.8845 11.3051 21.5261 11.928 21.2978 12.6027C21.0695 13.2775 20.9757 13.9909 21.0217 14.7021C21.7432 14.7096 22.4569 14.5523 23.1092 14.2422C23.7615 13.9321 24.3353 13.4772 24.7874 12.9118Z" fill="black"/>
                          <path d="M47.326 30.5288H42.0304L40.7586 34.3048H38.5156L43.5316 20.3345H45.862L50.8779 34.3048H48.5967L47.326 30.5288ZM42.5789 28.7863H46.7765L44.7072 22.6581H44.6493L42.5789 28.7863Z" fill="black"/>
                          <path d="M61.7107 29.2126C61.7107 32.3777 60.026 34.4113 57.4836 34.4113C56.8395 34.4452 56.199 34.296 55.6354 33.9808C55.0718 33.6657 54.6078 33.1973 54.2966 32.6293H54.2485V37.6742H52.1693V24.1193H54.1818V25.8134H54.2201C54.5456 25.2481 55.0174 24.7822 55.5853 24.4651C56.1533 24.148 56.796 23.9917 57.4453 24.0127C60.0161 24.0128 61.7107 26.0562 61.7107 29.2126ZM59.5736 29.2126C59.5736 27.1505 58.5138 25.7947 56.8969 25.7947C55.3083 25.7947 54.2398 27.179 54.2398 29.2126C54.2398 31.2648 55.3083 32.6392 56.8969 32.6392C58.5139 32.6392 59.5736 31.2934 59.5736 29.2126Z" fill="black"/>
                          <path d="M72.8597 29.2126C72.8597 32.3777 71.1744 34.4113 68.632 34.4113C67.988 34.4452 67.3475 34.296 66.7839 33.9808C66.2202 33.6657 65.7562 33.1973 65.445 32.6293H65.3969V37.6742H63.3178V24.1193H65.3303V25.8134H65.3685C65.694 25.2481 66.1659 24.7822 66.7338 24.4651C67.3017 24.148 67.9445 23.9917 68.5938 24.0127C71.1646 24.0128 72.8597 26.0562 72.8597 29.2126ZM70.7221 29.2126C70.7221 27.1505 69.6623 25.7947 68.0453 25.7947C66.4567 25.7947 65.3882 27.179 65.3882 29.2126C65.3882 31.2648 66.4567 32.6392 68.0453 32.6392C69.6623 32.6392 70.7221 31.2934 70.7221 29.2126Z" fill="black"/>
                          <path d="M80.2264 30.4123C80.3804 31.7977 81.7188 32.7073 83.5478 32.7073C85.3002 32.7073 86.5611 31.7976 86.5611 30.5485C86.5611 29.4641 85.8006 28.8148 84.0001 28.3699L82.1996 27.9337C79.6484 27.3141 78.4641 26.1144 78.4641 24.1676C78.4641 21.7572 80.5531 20.1016 83.5183 20.1016C86.4551 20.1016 88.4676 21.7572 88.5353 24.1676H86.4365C86.3109 22.7734 85.1647 21.9319 83.4899 21.9319C81.815 21.9319 80.6689 22.7833 80.6689 24.0226C80.6689 25.0103 81.4009 25.5914 83.1916 26.0363L84.7223 26.4143C87.5727 27.0921 88.756 28.2435 88.756 30.287C88.756 32.9006 86.6867 34.5376 83.3937 34.5376C80.3126 34.5376 78.2324 32.939 78.098 30.4122L80.2264 30.4123Z" fill="black"/>
                          <path d="M93.2458 21.7089V24.1193H95.172V25.775H93.2458V31.3901C93.2458 32.2624 93.6315 32.6689 94.4782 32.6689C94.7069 32.6649 94.9352 32.6487 95.1622 32.6205V34.2663C94.7815 34.3378 94.3945 34.3702 94.0073 34.363C91.9566 34.363 91.1568 33.5884 91.1568 31.6131V25.775H89.6841V24.1193H91.1568V21.7089H93.2458Z" fill="black"/>
                          <path d="M96.2867 29.2126C96.2867 26.0079 98.1638 23.9941 101.091 23.9941C104.028 23.9941 105.896 26.0078 105.896 29.2126C105.896 32.4261 104.037 34.4311 101.091 34.4311C98.1452 34.4311 96.2867 32.4261 96.2867 29.2126ZM103.777 29.2126C103.777 27.0142 102.775 25.7167 101.091 25.7167C99.406 25.7167 98.4041 27.0241 98.4041 29.2126C98.4041 31.4197 99.406 32.7073 101.091 32.7073C102.775 32.7073 103.777 31.4197 103.777 29.2126Z" fill="black"/>
                          <path d="M107.61 24.1193H109.593V25.853H109.641C109.775 25.3115 110.09 24.833 110.534 24.4979C110.978 24.1628 111.523 23.9915 112.077 24.0127C112.317 24.0119 112.556 24.0381 112.79 24.0908V26.0463C112.487 25.9534 112.172 25.9107 111.855 25.92C111.553 25.9077 111.252 25.9612 110.973 26.077C110.693 26.1927 110.442 26.3679 110.236 26.5905C110.03 26.8132 109.875 27.0779 109.78 27.3667C109.686 27.6554 109.655 27.9613 109.689 28.2634V34.3047H107.61L107.61 24.1193Z" fill="black"/>
                          <path d="M122.376 31.3132C122.096 33.1622 120.305 34.4311 118.014 34.4311C115.068 34.4311 113.239 32.4459 113.239 29.2609C113.239 26.0661 115.077 23.9941 117.927 23.9941C120.729 23.9941 122.491 25.9299 122.491 29.0181V29.7345H115.337V29.8608C115.304 30.2356 115.351 30.6133 115.474 30.9686C115.598 31.3239 115.795 31.6488 116.052 31.9217C116.31 32.1945 116.623 32.4091 116.969 32.5512C117.316 32.6933 117.688 32.7596 118.062 32.7458C118.554 32.7921 119.047 32.6777 119.468 32.4195C119.89 32.1614 120.217 31.7734 120.401 31.3132L122.376 31.3132ZM115.347 28.2733H120.411C120.43 27.9362 120.379 27.5989 120.262 27.2826C120.145 26.9662 119.964 26.6776 119.731 26.4349C119.497 26.1921 119.217 26.0005 118.906 25.872C118.596 25.7435 118.262 25.6809 117.927 25.6882C117.588 25.6862 117.253 25.7516 116.939 25.8807C116.626 26.0097 116.341 26.1999 116.101 26.4403C115.862 26.6806 115.671 26.9663 115.542 27.2809C115.413 27.5955 115.346 27.9328 115.347 28.2733Z" fill="black"/>
                          <path d="M42.3175 9.82296C42.7534 9.7915 43.1908 9.85772 43.5982 10.0168C44.0055 10.1759 44.3727 10.424 44.6732 10.7431C44.9737 11.0621 45.2 11.4443 45.3358 11.862C45.4717 12.2797 45.5136 12.7224 45.4586 13.1584C45.4586 15.3029 44.306 16.5357 42.3175 16.5357H39.9062V9.82296H42.3175ZM40.9431 15.5863H42.2017C42.5132 15.6051 42.8249 15.5537 43.1141 15.436C43.4034 15.3183 43.6629 15.1373 43.8738 14.906C44.0847 14.6747 44.2416 14.3991 44.3332 14.0992C44.4248 13.7992 44.4487 13.4825 44.4032 13.1721C44.4454 12.8629 44.4191 12.5482 44.3261 12.2504C44.2331 11.9527 44.0757 11.6793 43.8653 11.4499C43.6549 11.2204 43.3967 11.0407 43.1091 10.9234C42.8214 10.8061 42.5116 10.7543 42.2017 10.7716H40.9431V15.5863Z" fill="black"/>
                          <path d="M46.6303 14.0005C46.5986 13.6676 46.6365 13.3317 46.7414 13.0143C46.8464 12.697 47.0162 12.4053 47.2399 12.1578C47.4636 11.9103 47.7363 11.7126 48.0404 11.5772C48.3445 11.4419 48.6734 11.372 49.006 11.372C49.3386 11.372 49.6675 11.4419 49.9717 11.5772C50.2758 11.7126 50.5485 11.9103 50.7722 12.1578C50.9958 12.4053 51.1656 12.697 51.2706 13.0143C51.3756 13.3317 51.4135 13.6676 51.3818 14.0005C51.4141 14.3337 51.3767 14.6701 51.2719 14.9879C51.1672 15.3057 50.9976 15.598 50.7738 15.846C50.5501 16.094 50.2772 16.2921 49.9727 16.4277C49.6683 16.5633 49.339 16.6334 49.006 16.6334C48.6731 16.6334 48.3438 16.5633 48.0393 16.4277C47.7349 16.2921 47.462 16.094 47.2383 15.846C47.0145 15.598 46.8448 15.3057 46.7401 14.9879C46.6354 14.6701 46.598 14.3337 46.6303 14.0005ZM50.3592 14.0005C50.3592 12.9024 49.8686 12.2602 49.0077 12.2602C48.1435 12.2602 47.6573 12.9024 47.6573 14.0005C47.6573 15.1074 48.1435 15.7446 49.0077 15.7446C49.8686 15.7445 50.3592 15.1029 50.3592 14.0005Z" fill="black"/>
                          <path d="M57.6974 16.5355H56.666L55.6248 12.8046H55.5462L54.5093 16.5355H53.4878L52.0991 11.4697H53.1076L54.01 15.3352H54.0843L55.1201 11.4697H56.0739L57.1096 15.3352H57.1883L58.0864 11.4697H59.0806L57.6974 16.5355Z" fill="black"/>
                          <path d="M60.2481 11.4697H61.2052V12.2745H61.2795C61.4056 11.9855 61.6181 11.7432 61.8876 11.5814C62.1571 11.4196 62.4701 11.3464 62.7829 11.372C63.028 11.3534 63.2741 11.3906 63.503 11.4807C63.7319 11.5708 63.9377 11.7116 64.1052 11.8925C64.2727 12.0735 64.3975 12.29 64.4705 12.526C64.5434 12.7621 64.5626 13.0116 64.5266 13.2561V16.5355H63.5324V13.5072C63.5324 12.6931 63.1806 12.2882 62.4453 12.2882C62.2789 12.2804 62.1127 12.3089 61.9583 12.3717C61.8038 12.4345 61.6647 12.5302 61.5504 12.6521C61.4362 12.7741 61.3495 12.9194 61.2963 13.0782C61.2431 13.2369 61.2247 13.4054 61.2424 13.572V16.5355H60.2481L60.2481 11.4697Z" fill="black"/>
                          <path d="M66.1108 9.49219H67.105V16.5355H66.1108V9.49219Z" fill="black"/>
                          <path d="M68.4876 14.0004C68.4559 13.6675 68.4938 13.3316 68.5988 13.0143C68.7038 12.6969 68.8736 12.4051 69.0973 12.1577C69.3211 11.9102 69.5937 11.7124 69.8979 11.5771C70.2021 11.4418 70.531 11.3719 70.8636 11.3719C71.1962 11.3719 71.5251 11.4418 71.8293 11.5771C72.1335 11.7124 72.4061 11.9102 72.6299 12.1577C72.8536 12.4051 73.0234 12.6969 73.1284 13.0143C73.2334 13.3316 73.2713 13.6675 73.2396 14.0004C73.2719 14.3337 73.2344 14.6701 73.1297 14.9879C73.0249 15.3057 72.8552 15.598 72.6315 15.846C72.4077 16.0939 72.1348 16.2921 71.8303 16.4277C71.5259 16.5633 71.1966 16.6333 70.8636 16.6333C70.5306 16.6333 70.2013 16.5633 69.8969 16.4277C69.5924 16.2921 69.3195 16.0939 69.0957 15.846C68.872 15.598 68.7023 15.3057 68.5975 14.9879C68.4928 14.6701 68.4553 14.3337 68.4876 14.0004ZM72.2165 14.0004C72.2165 12.9024 71.7259 12.2602 70.865 12.2602C70.0007 12.2602 69.5146 12.9024 69.5146 14.0004C69.5146 15.1073 70.0008 15.7445 70.865 15.7445C71.7259 15.7445 72.2165 15.1029 72.2165 14.0004Z" fill="black"/>
                          <path d="M74.2863 15.1029C74.2863 14.1911 74.9615 13.6654 76.16 13.5907L77.5247 13.5116V13.0743C77.5247 12.5393 77.1729 12.2372 76.4933 12.2372C75.9383 12.2372 75.5537 12.4421 75.4433 12.8002H74.4808C74.5824 11.9301 75.3964 11.372 76.5392 11.372C77.8022 11.372 78.5145 12.0042 78.5145 13.0743V16.5356H77.5574V15.8236H77.4788C77.3191 16.079 77.0949 16.2872 76.8291 16.4269C76.5632 16.5667 76.2652 16.633 75.9656 16.619C75.7541 16.6411 75.5403 16.6185 75.3381 16.5524C75.1359 16.4864 74.9496 16.3785 74.7914 16.2356C74.6332 16.0928 74.5065 15.9182 74.4195 15.7231C74.3325 15.528 74.2871 15.3167 74.2863 15.1029ZM77.5247 14.6701V14.2466L76.2944 14.3257C75.6007 14.3723 75.286 14.6096 75.286 15.0562C75.286 15.5122 75.6793 15.7775 76.2202 15.7775C76.3786 15.7936 76.5387 15.7775 76.6909 15.7302C76.843 15.6828 76.9842 15.6052 77.1059 15.5019C77.2276 15.3985 77.3274 15.2717 77.3993 15.1288C77.4713 14.9859 77.5139 14.8299 77.5247 14.6701Z" fill="black"/>
                          <path d="M79.8217 14.0004C79.8217 12.3997 80.64 11.3857 81.9128 11.3857C82.2277 11.3711 82.5402 11.4469 82.8137 11.6043C83.0873 11.7617 83.3107 11.9941 83.4577 12.2744H83.532V9.49219H84.5263V16.5355H83.5735V15.7352H83.4949C83.3365 16.0136 83.1053 16.2431 82.8264 16.3989C82.5476 16.5547 82.2316 16.6308 81.9129 16.619C80.6313 16.6191 79.8217 15.605 79.8217 14.0004ZM80.8487 14.0004C80.8487 15.0749 81.3524 15.7215 82.1948 15.7215C83.0327 15.7215 83.5506 15.0656 83.5506 14.0048C83.5506 12.9491 83.0273 12.2838 82.1948 12.2838C81.3578 12.2838 80.8487 12.9348 80.8487 14.0004Z" fill="black"/>
                          <path d="M88.6393 14.0004C88.6076 13.6675 88.6455 13.3317 88.7505 13.0143C88.8554 12.697 89.0252 12.4052 89.2489 12.1578C89.4726 11.9103 89.7453 11.7125 90.0494 11.5772C90.3536 11.4419 90.6825 11.372 91.015 11.372C91.3476 11.372 91.6765 11.4419 91.9807 11.5772C92.2848 11.7125 92.5575 11.9103 92.7812 12.1578C93.0049 12.4052 93.1746 12.697 93.2796 13.0143C93.3846 13.3317 93.4225 13.6675 93.3908 14.0004C93.4231 14.3337 93.3857 14.6701 93.281 14.9879C93.1763 15.3057 93.0066 15.598 92.7828 15.846C92.5591 16.094 92.2862 16.2921 91.9818 16.4277C91.6773 16.5633 91.348 16.6334 91.015 16.6334C90.6821 16.6334 90.3528 16.5633 90.0483 16.4277C89.7439 16.2921 89.471 16.094 89.2473 15.846C89.0235 15.598 88.8538 15.3057 88.7491 14.9879C88.6444 14.6701 88.607 14.3337 88.6393 14.0004ZM92.3682 14.0004C92.3682 12.9024 91.8776 12.2602 91.0167 12.2602C90.1525 12.2602 89.6663 12.9024 89.6663 14.0005C89.6663 15.1073 90.1525 15.7445 91.0167 15.7445C91.8776 15.7445 92.3682 15.1029 92.3682 14.0004Z" fill="black"/>
                          <path d="M94.7248 11.4697H95.6819V12.2745H95.7562C95.8823 11.9855 96.0948 11.7432 96.3643 11.5814C96.6338 11.4196 96.9468 11.3464 97.2596 11.372C97.5047 11.3534 97.7508 11.3906 97.9797 11.4807C98.2086 11.5708 98.4144 11.7115 98.5819 11.8925C98.7494 12.0734 98.8742 12.29 98.9472 12.526C99.0201 12.7621 99.0393 13.0116 99.0033 13.2561V16.5355H98.0091V13.5072C98.0091 12.6931 97.6573 12.2882 96.922 12.2882C96.7556 12.2804 96.5894 12.3089 96.435 12.3717C96.2805 12.4345 96.1414 12.5302 96.0271 12.6521C95.9129 12.774 95.8262 12.9194 95.773 13.0782C95.7198 13.2369 95.7014 13.4054 95.7191 13.572V16.5355H94.7248V11.4697Z" fill="black"/>
                          <path d="M104.621 10.2085V11.4928H105.713V12.3349H104.621V14.9398C104.621 15.4704 104.839 15.7028 105.334 15.7028C105.46 15.7024 105.587 15.6946 105.713 15.6797V16.5124C105.534 16.5446 105.353 16.5617 105.172 16.5635C104.066 16.5635 103.626 16.1724 103.626 15.1957V12.3349H102.826V11.4928H103.626V10.2085H104.621Z" fill="black"/>
                          <path d="M107.071 9.49219H108.057V12.2838H108.135C108.267 11.9921 108.486 11.7484 108.761 11.586C109.036 11.4236 109.354 11.3504 109.671 11.3763C109.915 11.363 110.159 11.4039 110.385 11.4962C110.612 11.5885 110.815 11.7299 110.981 11.9103C111.146 12.0907 111.27 12.3056 111.344 12.5398C111.418 12.7739 111.439 13.0215 111.406 13.2649V16.5355H110.411V13.5115C110.411 12.7024 110.036 12.2926 109.334 12.2926C109.163 12.2785 108.991 12.3021 108.83 12.3618C108.669 12.4215 108.523 12.5158 108.403 12.6381C108.282 12.7605 108.189 12.9079 108.131 13.07C108.073 13.2322 108.05 13.4052 108.065 13.5769V16.5355H107.071L107.071 9.49219Z" fill="black"/>
                          <path d="M117.203 15.1677C117.068 15.6307 116.775 16.0312 116.376 16.2991C115.977 16.567 115.497 16.6853 115.02 16.6333C114.688 16.6421 114.359 16.5782 114.054 16.446C113.749 16.3138 113.476 16.1164 113.255 15.8676C113.033 15.6188 112.868 15.3246 112.771 15.0053C112.674 14.686 112.648 14.3493 112.693 14.0186C112.649 13.6868 112.676 13.3494 112.773 13.0291C112.87 12.7089 113.034 12.4133 113.254 12.1623C113.474 11.9114 113.745 11.7109 114.049 11.5746C114.353 11.4382 114.683 11.3691 115.016 11.372C116.418 11.372 117.263 12.335 117.263 13.9257V14.2746H113.706V14.3306C113.69 14.5165 113.714 14.7036 113.774 14.88C113.835 15.0563 113.931 15.218 114.058 15.3546C114.184 15.4912 114.337 15.5998 114.508 15.6734C114.678 15.747 114.862 15.7839 115.048 15.7818C115.285 15.8105 115.526 15.7675 115.74 15.6581C115.953 15.5488 116.129 15.3781 116.246 15.1677L117.203 15.1677ZM113.706 13.5352H116.25C116.263 13.3651 116.24 13.1944 116.183 13.0338C116.126 12.8733 116.036 12.7265 115.919 12.6029C115.803 12.4793 115.661 12.3816 115.505 12.3162C115.348 12.2507 115.18 12.2189 115.01 12.2229C114.838 12.2207 114.668 12.2531 114.509 12.3183C114.349 12.3835 114.205 12.4801 114.083 12.6024C113.961 12.7247 113.865 12.8703 113.801 13.0305C113.736 13.1906 113.704 13.3623 113.706 13.5352Z" fill="black"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_8866_64159">
                          <rect width="133.878" height="45" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>
                        </a> 
                       <a href="javascript:;"  className="cursor-pointer ">
                          <svg width="153" height="45" viewBox="0 0 153 45" fill="none" xmlns="http://www.w3.org/2000/pagedone.svg">
                              <g clip-path="url(#clip0_8866_64160)">
                              <path d="M146.733 0H6.48866C3.39048 0 0.878906 2.5184 0.878906 5.625V39.375C0.878906 42.4816 3.39048 45 6.48866 45H146.733C149.831 45 152.342 42.4816 152.342 39.375V5.625C152.342 2.5184 149.831 0 146.733 0Z" fill="white"/>
                              <path d="M146.733 0.9C147.982 0.9 149.181 1.39781 150.065 2.28392C150.948 3.17003 151.445 4.37185 151.445 5.625V39.375C151.445 40.6281 150.948 41.83 150.065 42.7161C149.181 43.6022 147.982 44.1 146.733 44.1H6.48866C5.23891 44.1 4.04035 43.6022 3.15664 42.7161C2.27293 41.83 1.77647 40.6281 1.77647 39.375V5.625C1.77647 4.37185 2.27293 3.17003 3.15664 2.28392C4.04035 1.39781 5.23891 0.9 6.48866 0.9H146.733ZM146.733 0H6.48866C5.00086 0 3.574 0.592632 2.52197 1.64752C1.46993 2.70242 0.878906 4.13316 0.878906 5.625V39.375C0.878906 40.8668 1.46993 42.2976 2.52197 43.3525C3.574 44.4074 5.00086 45 6.48866 45H146.733C148.22 45 149.647 44.4074 150.699 43.3525C151.751 42.2976 152.342 40.8668 152.342 39.375V5.625C152.342 4.13316 151.751 2.70242 150.699 1.64752C149.647 0.592632 148.22 0 146.733 0Z" fill="black"/>
                              <path d="M24.1261 21.8462L12.1773 34.5587C12.3079 35.0396 12.5469 35.4839 12.8759 35.8573C13.2049 36.2308 13.6152 36.5234 14.0749 36.7126C14.5347 36.9018 15.0317 36.9825 15.5275 36.9484C16.0233 36.9144 16.5047 36.7665 16.9344 36.5162L30.3978 28.7312L24.1261 21.8462Z" fill="#EA4335"/>
                              <path d="M36.2099 19.6862L30.3982 16.3112L23.8684 22.15L30.4206 28.7313L36.1986 25.3563C36.7123 25.0804 37.1416 24.67 37.441 24.1688C37.7403 23.6675 37.8984 23.0942 37.8984 22.51C37.8984 21.9258 37.7403 21.3525 37.441 20.8512C37.1416 20.35 36.7123 19.9396 36.1986 19.6637L36.2099 19.6862Z" fill="#FBBC04"/>
                              <path d="M12.1773 10.4387C12.118 10.7045 12.0916 10.9765 12.0988 11.2487V33.7488C12.1008 34.0299 12.1385 34.3097 12.211 34.5812L24.5525 22.2062L12.1773 10.4387Z" fill="#4285F4"/>
                              <path d="M24.2156 22.4988L30.3976 16.3L16.9342 8.4925C16.4283 8.191 15.8509 8.03167 15.2625 8.03125C14.5527 8.03329 13.8631 8.26881 13.2997 8.70168C12.7363 9.13454 12.3301 9.74083 12.1434 10.4275L24.2156 22.4988Z" fill="#34A853"/>
                              <path d="M77.3306 24.465C76.3853 24.4672 75.4619 24.7505 74.6771 25.2789C73.8924 25.8074 73.2815 26.5573 72.9218 27.4339C72.5621 28.3104 72.4698 29.2743 72.6563 30.2035C72.8429 31.1327 73.3001 31.9856 73.9701 32.6542C74.6401 33.3229 75.4928 33.7773 76.4204 33.9601C77.3479 34.1428 78.3087 34.0457 79.1812 33.6809C80.0537 33.3161 80.7987 32.7001 81.3221 31.9107C81.8454 31.1214 82.1235 30.1941 82.1213 29.2463C82.1305 28.6139 82.0126 27.9862 81.7748 27.4005C81.537 26.8148 81.1841 26.2831 80.7371 25.8369C80.2901 25.3908 79.7582 25.0395 79.1729 24.8038C78.5877 24.5681 77.9611 24.4529 77.3306 24.465ZM77.3306 32.1488C76.7512 32.1894 76.173 32.0543 75.6712 31.7611C75.1694 31.4678 74.7671 31.03 74.5168 30.5045C74.2664 29.979 74.1795 29.3901 74.2673 28.8144C74.3551 28.2387 74.6136 27.7028 75.0092 27.2764C75.4048 26.85 75.9192 26.5528 76.4855 26.4234C77.0518 26.294 77.6438 26.3384 78.1846 26.5508C78.7254 26.7633 79.1899 27.134 79.5178 27.6147C79.8457 28.0954 80.0219 28.6639 80.0233 29.2463C80.0413 29.6153 79.9855 29.9842 79.8592 30.3312C79.7328 30.6783 79.5384 30.9964 79.2874 31.267C79.0365 31.5375 78.734 31.7549 78.3979 31.9063C78.0619 32.0577 77.6989 32.1402 77.3306 32.1488ZM66.874 24.465C65.9287 24.4672 65.0053 24.7505 64.2205 25.2789C63.4358 25.8074 62.8249 26.5573 62.4653 27.4339C62.1056 28.3104 62.0132 29.2743 62.1998 30.2035C62.3864 31.1327 62.8436 31.9856 63.5135 32.6542C64.1835 33.3229 65.0362 33.7773 65.9638 33.9601C66.8914 34.1428 67.8521 34.0457 68.7246 33.6809C69.5971 33.3161 70.3421 32.7001 70.8655 31.9107C71.3888 31.1214 71.6669 30.1941 71.6647 29.2463C71.6739 28.6139 71.556 27.9862 71.3182 27.4005C71.0804 26.8148 70.7275 26.2831 70.2805 25.8369C69.8335 25.3908 69.3016 25.0395 68.7163 24.8038C68.1311 24.5681 67.5046 24.4529 66.874 24.465ZM66.874 32.1488C66.2946 32.1894 65.7164 32.0543 65.2146 31.7611C64.7128 31.4678 64.3105 31.03 64.0602 30.5045C63.8098 29.979 63.7229 29.3901 63.8107 28.8144C63.8985 28.2387 64.157 27.7028 64.5526 27.2764C64.9482 26.85 65.4626 26.5528 66.0289 26.4234C66.5952 26.294 67.1872 26.3384 67.728 26.5508C68.2688 26.7633 68.7333 27.134 69.0613 27.6147C69.3892 28.0954 69.5653 28.6639 69.5667 29.2463C69.5848 29.6153 69.529 29.9842 69.4026 30.3312C69.2762 30.6783 69.0818 30.9964 68.8308 31.267C68.5799 31.5375 68.2774 31.7549 67.9414 31.9063C67.6053 32.0577 67.2424 32.1402 66.874 32.1488ZM54.4428 25.9388V27.9638H59.2896C59.2136 28.9175 58.8182 29.8175 58.1677 30.5175C57.6815 31.0142 57.0967 31.403 56.4512 31.6588C55.8057 31.9146 55.1138 32.0317 54.4203 32.0025C52.9921 32.0025 51.6223 31.4336 50.6123 30.4209C49.6024 29.4082 49.035 28.0347 49.035 26.6025C49.035 25.1703 49.6024 23.7968 50.6123 22.7841C51.6223 21.7714 52.9921 21.2025 54.4203 21.2025C55.7896 21.1821 57.1118 21.7035 58.1003 22.6538L59.5252 21.225C58.8565 20.5618 58.0625 20.0391 57.1898 19.6875C56.3171 19.336 55.3832 19.1626 54.4428 19.1775C53.4454 19.1386 52.4504 19.302 51.5174 19.6578C50.5845 20.0137 49.7328 20.5548 49.0134 21.2486C48.294 21.9425 47.7217 22.7748 47.3307 23.6957C46.9398 24.6167 46.7383 25.6072 46.7383 26.6081C46.7383 27.609 46.9398 28.5996 47.3307 29.5205C47.7217 30.4415 48.294 31.2738 49.0134 31.9676C49.7328 32.6615 50.5845 33.2025 51.5174 33.5584C52.4504 33.9143 53.4454 34.0777 54.4428 34.0388C55.4025 34.0772 56.3595 33.9116 57.2509 33.5529C58.1423 33.1942 58.948 32.6505 59.615 31.9575C60.7932 30.6597 61.4209 28.9528 61.3652 27.1988C61.3692 26.7766 61.3354 26.3549 61.2642 25.9388H54.4428ZM105.278 27.5138C104.986 26.6506 104.439 25.8969 103.709 25.3525C102.98 24.808 102.103 24.4986 101.194 24.465C100.581 24.4638 99.9733 24.5888 99.4097 24.8324C98.8461 25.0759 98.3383 25.4327 97.9177 25.8809C97.4971 26.329 97.1726 26.8588 96.9643 27.4377C96.756 28.0165 96.6683 28.6321 96.7067 29.2463C96.6971 30.2732 97.0191 31.2757 97.6246 32.104C98.2301 32.9324 99.0865 33.5421 100.066 33.842C101.046 34.142 102.096 34.1162 103.059 33.7684C104.023 33.4207 104.849 32.7696 105.413 31.9125L103.786 30.7875C103.544 31.1928 103.2 31.5275 102.788 31.7584C102.377 31.9893 101.913 32.1083 101.441 32.1038C100.955 32.1239 100.474 31.996 100.062 31.737C99.6491 31.478 99.3244 31.1 99.1301 30.6525L105.514 28.0088L105.278 27.5138ZM98.7711 29.1113C98.7483 28.7618 98.7953 28.4113 98.9094 28.0803C99.0234 27.7493 99.2022 27.4445 99.4352 27.1836C99.6682 26.9227 99.9507 26.7111 100.266 26.5611C100.582 26.4111 100.924 26.3257 101.273 26.31C101.635 26.2879 101.994 26.3732 102.308 26.5553C102.621 26.7374 102.874 27.0082 103.034 27.3338L98.7711 29.1113ZM93.5877 33.7463H95.6857V19.6838H93.5877V33.7463ZM90.1545 25.5338H90.0759C89.7574 25.1861 89.3683 24.9108 88.9348 24.7265C88.5013 24.5421 88.0335 24.453 87.5628 24.465C86.3367 24.5246 85.1805 25.055 84.3338 25.9462C83.4871 26.8373 83.0148 28.021 83.0148 29.2519C83.0148 30.4827 83.4871 31.6664 84.3338 32.5576C85.1805 33.4488 86.3367 33.9791 87.5628 34.0388C88.0384 34.0483 88.5103 33.9524 88.9448 33.758C89.3792 33.5635 89.7655 33.2752 90.0759 32.9138H90.1545V33.6C90.1545 35.4338 89.1784 36.4125 87.6077 36.4125C87.083 36.4009 86.5735 36.2333 86.144 35.9308C85.7145 35.6284 85.3844 35.2047 85.1955 34.7138L83.3779 35.4675C83.7139 36.3138 84.2982 37.0379 85.0534 37.5441C85.8087 38.0503 86.6993 38.3147 87.6077 38.3025C90.0647 38.3025 92.0955 36.8513 92.0955 33.3188V24.7463H90.1545V25.5338ZM87.7423 32.1488C87.0072 32.1028 86.3172 31.7776 85.8129 31.2394C85.3085 30.7012 85.0278 29.9904 85.0278 29.2519C85.0278 28.5134 85.3085 27.8026 85.8129 27.2644C86.3172 26.7262 87.0072 26.401 87.7423 26.355C88.1016 26.3705 88.4541 26.4584 88.7788 26.6133C89.1036 26.7683 89.3939 26.9871 89.6325 27.2569C89.8712 27.5266 90.0533 27.8418 90.168 28.1835C90.2828 28.5253 90.3278 28.8867 90.3003 29.2463C90.3309 29.607 90.2883 29.9703 90.1749 30.3141C90.0615 30.6578 89.8797 30.9749 89.6406 31.2463C89.4015 31.5176 89.11 31.7375 88.7837 31.8926C88.4574 32.0477 88.1031 32.1348 87.7423 32.1488ZM115.107 19.6838H110.08V33.7463H112.178V28.4138H115.107C115.705 28.4568 116.305 28.3759 116.87 28.1761C117.436 27.9762 117.954 27.6617 118.393 27.2522C118.832 26.8426 119.182 26.3468 119.421 25.7957C119.66 25.2445 119.784 24.6499 119.784 24.0488C119.784 23.4476 119.66 22.853 119.421 22.3018C119.182 21.7507 118.832 21.2549 118.393 20.8453C117.954 20.4358 117.436 20.1213 116.87 19.9214C116.305 19.7216 115.705 19.6407 115.107 19.6838ZM115.107 26.4338H112.178V21.6413H115.152C115.788 21.6413 116.399 21.8949 116.849 22.3464C117.3 22.7979 117.553 23.4102 117.553 24.0488C117.553 24.6873 117.3 25.2996 116.849 25.7511C116.399 26.2026 115.788 26.4563 115.152 26.4563L115.107 26.4338ZM128.054 24.42C127.29 24.3728 126.529 24.5511 125.865 24.933C125.201 25.3149 124.663 25.8836 124.318 26.5688L126.169 27.345C126.356 27.0068 126.637 26.7302 126.977 26.5485C127.318 26.3669 127.703 26.2879 128.088 26.3213C128.354 26.2901 128.624 26.3124 128.882 26.3869C129.139 26.4614 129.379 26.5866 129.588 26.7552C129.797 26.9238 129.97 27.1324 130.098 27.3689C130.226 27.6054 130.305 27.8649 130.332 28.1325V28.2675C129.657 27.9119 128.906 27.7266 128.144 27.7275C126.147 27.7275 124.105 28.8525 124.105 30.9C124.124 31.3352 124.231 31.762 124.419 32.155C124.606 32.548 124.87 32.8992 125.196 33.1878C125.521 33.4764 125.901 33.6965 126.313 33.8349C126.725 33.9733 127.161 34.0274 127.594 33.9938C128.12 34.023 128.645 33.9112 129.114 33.6701C129.584 33.4289 129.981 33.0669 130.264 32.6213H130.332V33.7463H132.351V28.335C132.351 25.8713 130.489 24.4425 128.099 24.4425L128.054 24.42ZM127.796 32.1263C127.112 32.1263 126.158 31.7775 126.158 30.9338C126.158 29.8088 127.347 29.4263 128.402 29.4263C129.068 29.4098 129.727 29.5729 130.309 29.8988C130.239 30.5097 129.95 31.0743 129.496 31.4881C129.042 31.9018 128.454 32.1365 127.841 32.1488L127.796 32.1263ZM139.711 24.7463L137.31 30.8438H137.243L134.752 24.7463H132.508L136.244 33.2738L134.113 38.01H136.356L142.045 24.7463H139.711ZM120.862 33.7463H122.949V19.6838H120.862V33.7463Z" fill="black"/>
                              <path d="M52.4897 14.3403C51.8633 14.5661 51.2032 14.6841 50.5375 14.6891C50.1069 14.7128 49.6758 14.6504 49.2694 14.5055C48.863 14.3607 48.4893 14.1363 48.1702 13.8453C47.8723 13.531 47.6404 13.16 47.4882 12.7542C47.3359 12.3484 47.2665 11.916 47.2839 11.4828C47.2702 11.0361 47.3501 10.5915 47.5185 10.1777C47.6869 9.76391 47.94 9.39014 48.2614 9.08055C48.5829 8.77095 48.9655 8.53243 49.3846 8.38037C49.8038 8.22832 50.25 8.16613 50.6946 8.19781C51.2359 8.19037 51.7735 8.28976 52.2766 8.49031L52.0746 9.16531C51.6318 8.97576 51.1535 8.88369 50.6722 8.89531C50.3308 8.86821 49.9877 8.91567 49.6664 9.03442C49.3452 9.15317 49.0534 9.34039 48.8113 9.58316C48.5692 9.82593 48.3825 10.1185 48.2641 10.4406C48.1456 10.7627 48.0983 11.1068 48.1253 11.4491C48.0926 11.7844 48.1324 12.1229 48.2421 12.4414C48.3519 12.7599 48.5289 13.0509 48.7611 13.2945C48.9934 13.538 49.2753 13.7284 49.5877 13.8526C49.9001 13.9768 50.2356 14.0319 50.5712 14.0141C50.954 14.0424 51.3382 13.9807 51.6931 13.8341V11.9441H50.3805V11.2466H52.4897V14.3403Z" fill="black"/>
                              <path d="M57.179 11.6403H54.7332V13.8903H57.4707V14.6216H53.9029V8.2653H57.3249V8.99655H54.7332V10.9653H57.1902L57.179 11.6403Z" fill="black"/>
                              <path d="M60.0741 8.99656H58.0995V8.26531H62.7892V8.99656H60.8931V14.6216H60.0741V8.99656Z" fill="black"/>
                              <path d="M66.7273 8.26531V14.6216H65.9531V8.26531H66.7273Z" fill="black"/>
                              <path d="M69.5434 8.99656H67.6136V8.26531H72.3146V8.99656H70.3736V14.6216H69.5434V8.99656Z" fill="black"/>
                              <path d="M80.7966 11.3816C80.7966 13.5641 79.4726 14.7566 77.857 14.7566C77.4533 14.751 77.0551 14.661 76.688 14.4925C76.3208 14.324 75.9927 14.0807 75.7246 13.7779C75.4564 13.4752 75.2542 13.1198 75.1307 12.7343C75.0072 12.3488 74.9651 11.9417 75.0073 11.5391C74.9587 11.1199 74.9981 10.6952 75.1229 10.2923C75.2477 9.88927 75.4552 9.51692 75.732 9.1991C76.0088 8.88128 76.3488 8.62502 76.7302 8.44677C77.1117 8.26852 77.5261 8.17222 77.9468 8.16406C78.3516 8.16621 78.7515 8.25381 79.1203 8.42116C79.4891 8.58851 79.8187 8.83186 80.0875 9.13537C80.3563 9.43888 80.5584 9.79575 80.6805 10.1828C80.8027 10.5698 80.8422 10.9782 80.7966 11.3816ZM75.8824 11.4828C75.8824 12.8441 76.6117 14.0591 77.9019 14.0591C79.1922 14.0591 79.9326 12.8553 79.9326 11.4153C79.9326 10.1553 79.2707 8.83906 77.9131 8.83906C76.5556 8.83906 75.8824 10.1216 75.8824 11.4828Z" fill="black"/>
                              <path d="M82.0531 14.6216V8.26531H82.9395L85.0263 11.4828C85.441 12.1304 85.8157 12.803 86.1483 13.4966C86.0809 12.6416 86.0585 11.8766 86.0585 10.8866V8.26531H86.8327V14.6216H86.0024L83.9941 11.3928C83.546 10.7142 83.1413 10.0078 82.7824 9.27781C82.7824 10.0766 82.7824 10.8416 82.7824 11.8991V14.6216H82.0531Z" fill="black"/>
                              <path d="M52.4897 14.3403C51.8633 14.5661 51.2032 14.6841 50.5375 14.6891C50.1069 14.7128 49.6758 14.6504 49.2694 14.5055C48.863 14.3607 48.4893 14.1363 48.1702 13.8453C47.8723 13.531 47.6404 13.16 47.4882 12.7542C47.3359 12.3484 47.2665 11.916 47.2839 11.4828C47.2702 11.0361 47.3501 10.5915 47.5185 10.1777C47.6869 9.76391 47.94 9.39014 48.2614 9.08055C48.5829 8.77095 48.9655 8.53243 49.3846 8.38037C49.8038 8.22832 50.25 8.16613 50.6946 8.19781C51.2359 8.19037 51.7735 8.28976 52.2766 8.49031L52.0746 9.16531C51.6318 8.97576 51.1535 8.88369 50.6722 8.89531C50.3308 8.86821 49.9877 8.91567 49.6664 9.03442C49.3452 9.15317 49.0534 9.34039 48.8113 9.58316C48.5692 9.82593 48.3825 10.1185 48.2641 10.4406C48.1456 10.7627 48.0983 11.1068 48.1253 11.4491C48.0926 11.7844 48.1324 12.1229 48.2421 12.4414C48.3519 12.7599 48.5289 13.0509 48.7611 13.2945C48.9934 13.538 49.2753 13.7284 49.5877 13.8526C49.9001 13.9768 50.2356 14.0319 50.5712 14.0141C50.954 14.0424 51.3382 13.9807 51.6931 13.8341V11.9441H50.3805V11.2466H52.4897V14.3403Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                              <path d="M57.179 11.6403H54.7332V13.8903H57.4707V14.6216H53.9029V8.2653H57.3249V8.99655H54.7332V10.9653H57.1902L57.179 11.6403Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                              <path d="M60.0741 8.99656H58.0995V8.26531H62.7892V8.99656H60.8931V14.6216H60.0741V8.99656Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                              <path d="M66.7273 8.26531V14.6216H65.9531V8.26531H66.7273Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                              <path d="M69.5434 8.99656H67.6136V8.26531H72.3146V8.99656H70.3736V14.6216H69.5434V8.99656Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                              <path d="M80.7966 11.3816C80.7966 13.5641 79.4726 14.7566 77.857 14.7566C77.4533 14.751 77.0551 14.661 76.688 14.4925C76.3208 14.324 75.9927 14.0807 75.7246 13.7779C75.4564 13.4752 75.2542 13.1198 75.1307 12.7343C75.0072 12.3488 74.9651 11.9417 75.0073 11.5391C74.9587 11.1199 74.9981 10.6952 75.1229 10.2923C75.2477 9.88927 75.4552 9.51692 75.732 9.1991C76.0088 8.88128 76.3488 8.62502 76.7302 8.44677C77.1117 8.26852 77.5261 8.17222 77.9468 8.16406C78.3516 8.16621 78.7515 8.25381 79.1203 8.42116C79.4891 8.58851 79.8187 8.83186 80.0875 9.13537C80.3563 9.43888 80.5584 9.79575 80.6805 10.1828C80.8027 10.5698 80.8422 10.9782 80.7966 11.3816ZM75.8824 11.4828C75.8824 12.8441 76.6117 14.0591 77.9019 14.0591C79.1922 14.0591 79.9326 12.8553 79.9326 11.4153C79.9326 10.1553 79.2707 8.83906 77.9131 8.83906C76.5556 8.83906 75.8824 10.1216 75.8824 11.4828Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                              <path d="M82.0531 14.6216V8.26531H82.9395L85.0263 11.4828C85.441 12.1304 85.8157 12.803 86.1483 13.4966C86.0809 12.6416 86.0585 11.8766 86.0585 10.8866V8.26531H86.8327V14.6216H86.0024L83.9941 11.3928C83.546 10.7142 83.1413 10.0078 82.7824 9.27781C82.7824 10.0766 82.7824 10.8416 82.7824 11.8991V14.6216H82.0531Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_8866_64160">
                              <rect width="151.463" height="45" fill="white" transform="translate(0.878906)"/>
                              </clipPath>
                              </defs>
                              </svg>
                              
                            </a>    
                  </div>
              </div>
           </div>
        </div>
      </section> */}


      {/* <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row">
            <div className="w-full lg:w-60">
              <h2
                className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left"
              >
                Our Stats
              </h2>
              <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
                We help you to unleash the power with AI-Tech
              </p>
            </div>
            <div className="w-full lg:w-4/5">
              <div
                className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between"
              >
                <div className="block">
                  <div
                    className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                  >
                    260+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left"
                    >Expert Teachers
                  </span>
                </div>
                <div className="block">
                  <div
                    className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                  >
                    975+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left"
                    >Active Students
                  </span>
                </div>
                <div className="block">
                  <div
                    className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                  >
                    2724+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left"
                    >Doubts  Solved</span
                  >
                </div>
                <div className="block">
                  <div
                    className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left"
                  >
                    50+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left"
                    >Courses Added</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
    </section> */}



    {/* <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">Our Recent Courses</h2>
          <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
             <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                  <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover"/>
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">Jan 01, 2023</span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">From Basics to Advanced: Your Complete React Journey</h4>
                  <p className="text-gray-500 leading-6 mb-10">Dive into React.js and learn to build scalable, responsive web applications with our structured, expert-guided courses.</p>
                  <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
             </div>
             <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                  <img src="https://pagedone.io/asset/uploads/1696244340.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover"/>
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">Feb 01, 2023</span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">From Concept to Code: Master DSA for Seamless Solutions</h4>
                  <p className="text-gray-500 leading-6 mb-10">Unlock the secrets of efficient algorithms and data structures to elevate your programming and conquer coding interviews</p>
                  <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
             </div>
             <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                  <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section" className="rounded-t-2xl w-full object-cover"/>
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">Mar 01, 2023</span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">Elevate Your Frontend Skills with Expert Next.js Training</h4>
                  <p className="text-gray-500 leading-6 mb-10">Unlock the power of Next.js and master the art of creating high-performance, SEO-friendly websites with our expert-led courses</p>
                  <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">Read more..</a>
              </div>
             </div>
          </div>
        </div>
    </section> */}



    {/* <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                    <div className="relative h-full">
                        <img src="https://pagedone.io/asset/uploads/1696488602.png" alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"/>
                        <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">Contact us</h1>
                        <div className="absolute bottom-0 w-full lg:p-11 p-5">
                            <div className="bg-white rounded-lg p-6 block">
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/pagedone.svg">
                                        <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">12345-12345</h5>
                                </a>
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/pagedone.svg">
                                        <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">EdTech1234@gmail.com</h5>
                                </a>
                                <a href="javascript:;" className="flex items-center">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/pagedone.svg">
                                        <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#4F46E5" stroke-width="2"/>
                                        <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#4F46E5" stroke-width="2"/>
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">Coding Blocks, Sector-15, Noida</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name"/>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email"/>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Phone"/>
                <div className="mb-10">
                    <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">Preferred method  of communication</h4>
                    <div className="flex">
                        <div className="flex items-center mr-11">
                            <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"/>
                            <label htmlFor="radio-group-1" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                                <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span> Email 
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"/>
                            <label htmlFor="radio-group-2" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                                <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span> Phone 
                            </label>
                        </div>
                    </div>
                </div>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message"/>
                <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">Send</button>
        </div>
      </div>
      </div>
    </section> */}



    {/* <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-center lg:gap-11 gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                    <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">Integrations</h2>
                    <p className="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">Integrations refer to the process of combining different software systems or components to work together seamlessly. This involves connecting various applications.</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
                    <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                        <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/pagedone.svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_30847_81616)">
                                      <path d="M8.56691 25.1969C8.56691 27.4961 6.70865 29.3544 4.40943 29.3544C2.11022 29.3544 0.251953 27.4961 0.251953 25.1969C0.251953 22.8977 2.11022 21.0394 4.40943 21.0394H8.56691V25.1969ZM10.6457 25.1969C10.6457 22.8977 12.5039 21.0394 14.8031 21.0394C17.1023 21.0394 18.9606 22.8977 18.9606 25.1969V35.5906C18.9606 37.8898 17.1023 39.7481 14.8031 39.7481C12.5039 39.7481 10.6457 37.8898 10.6457 35.5906V25.1969Z" fill="#E01E5A"/>
                                      <path d="M14.8034 8.50393C12.5042 8.50393 10.6459 6.64566 10.6459 4.34645C10.6459 2.04723 12.5042 0.188965 14.8034 0.188965C17.1026 0.188965 18.9609 2.04723 18.9609 4.34645V8.50393H14.8034ZM14.8034 10.6142C17.1026 10.6142 18.9609 12.4724 18.9609 14.7716C18.9609 17.0709 17.1026 18.9291 14.8034 18.9291H4.37818C2.07897 18.9291 0.220703 17.0709 0.220703 14.7716C0.220703 12.4724 2.07897 10.6142 4.37818 10.6142H14.8034Z" fill="#36C5F0"/>
                                      <path d="M31.465 14.7716C31.465 12.4724 33.3233 10.6142 35.6225 10.6142C37.9217 10.6142 39.7799 12.4724 39.7799 14.7716C39.7799 17.0709 37.9217 18.9291 35.6225 18.9291H31.465V14.7716ZM29.3862 14.7716C29.3862 17.0709 27.528 18.9291 25.2288 18.9291C22.9296 18.9291 21.0713 17.0709 21.0713 14.7716V4.34645C21.0713 2.04723 22.9296 0.188965 25.2288 0.188965C27.528 0.188965 29.3862 2.04723 29.3862 4.34645V14.7716Z" fill="#2EB67D"/>
                                      <path d="M25.2288 31.4331C27.528 31.4331 29.3863 33.2914 29.3863 35.5906C29.3863 37.8898 27.528 39.7481 25.2288 39.7481C22.9296 39.7481 21.0713 37.8898 21.0713 35.5906V31.4331H25.2288ZM25.2288 29.3544C22.9296 29.3544 21.0713 27.4961 21.0713 25.1969C21.0713 22.8977 22.9296 21.0394 25.2288 21.0394H35.654C37.9532 21.0394 39.8114 22.8977 39.8114 25.1969C39.8114 27.4961 37.9532 29.3544 35.654 29.3544H25.2288Z" fill="#ECB22E"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_30847_81616">
                                        <rect width="40" height="40" fill="white"/>
                                      </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">Slack</h4>
                            <p className="text-center text-gray-500 text-sm font-normal leading-snug">Slack is a cloud-based collaboration platform designed to facilitate communication</p>
                        </div>
                    </div>
                    <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                        <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/pagedone.svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_30847_81621)">
                                      <path d="M39.558 16.4377L39.504 16.3058L34.0583 3.28449C33.9481 3.02882 33.7519 2.81192 33.4983 2.66521C33.309 2.55416 33.094 2.48529 32.8705 2.46413C32.6471 2.44297 32.4213 2.4701 32.2111 2.54335C32.0013 2.61661 31.8127 2.73394 31.6612 2.88595C31.5096 3.03796 31.3989 3.22042 31.338 3.41871L27.6622 13.7345H12.7764L9.10047 3.41871C9.03916 3.22072 8.92824 3.0386 8.77653 2.88688C8.62482 2.73516 8.43653 2.61804 8.22667 2.54484C8.01683 2.47165 7.79124 2.44442 7.56786 2.46532C7.34451 2.48622 7.12956 2.55467 6.94017 2.66521C6.68656 2.81192 6.49041 3.02882 6.38019 3.28449L0.93705 16.3082L0.880537 16.4377C0.0968834 18.3151 0.000340194 20.3751 0.605462 22.3072C1.21058 24.2393 2.48456 25.9388 4.23532 27.1491L4.25587 27.1632L4.30208 27.1961L12.5862 32.8874L16.6962 35.7342L19.193 37.4649C19.486 37.6678 19.8431 37.7776 20.2102 37.7776C20.5774 37.7776 20.9345 37.6678 21.2275 37.4649L23.7243 35.7342L27.8343 32.8874L36.1775 27.1632L36.2006 27.1467C37.9512 25.9369 39.2253 24.2379 39.831 22.3063C40.4365 20.3747 40.3407 18.315 39.558 16.4377Z" fill="#E24329"/>
                                      <path d="M39.5589 16.4372L39.5049 16.3053C36.8517 16.8044 34.3515 17.8352 32.184 19.324L20.2266 27.6124L27.8403 32.8869L36.1835 27.1627L36.2067 27.1462C37.9565 25.9356 39.2295 24.2365 39.8342 22.305C40.4386 20.3734 40.3421 18.314 39.5589 16.4372Z" fill="#FC6D26"/>
                                      <path d="M12.5869 32.8873L16.6969 35.7341L19.1937 37.4647C19.4867 37.6677 19.8438 37.7774 20.2109 37.7774C20.5781 37.7774 20.9352 37.6677 21.2281 37.4647L23.7249 35.7341L27.8349 32.8873L20.2212 27.6128L12.5869 32.8873Z" fill="#FCA326"/>
                                      <path d="M8.25536 19.3244C6.08853 17.8364 3.58936 16.8064 0.93705 16.3081L0.880538 16.4376C0.0968834 18.315 0.000340134 20.3751 0.605462 22.3072C1.21058 24.2392 2.48456 25.9386 4.23532 27.1489L4.25587 27.1631L4.30208 27.196L12.5862 32.8873L20.2051 27.6128L8.25536 19.3244Z" fill="#FC6D26"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_30847_81621">
                                        <rect width="40" height="40" fill="white"/>
                                      </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">GitLab</h4>
                            <p className="text-center text-gray-500 text-sm font-normal leading-snug">GitLab is a comprehensive DevOps platform that provides a complete solution for the entire software </p>
                        </div>
                    </div>
                    <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                        <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_30847_81626)">
                                      <path d="M19.9989 0.065918C8.9872 0.065918 0.0600586 8.99282 0.0600586 20.0045C0.0600586 31.0166 8.9872 39.9428 19.9989 39.9428C31.0117 39.9428 39.9379 31.0166 39.9379 20.0045C39.9379 8.99354 31.0117 0.0668703 19.9986 0.0668703L19.9989 0.065918ZM29.1427 28.8231C28.7855 29.4088 28.0189 29.5945 27.4332 29.235C22.7517 26.3754 16.8584 25.7278 9.91792 27.3135C9.24911 27.4659 8.58244 27.0469 8.43006 26.3778C8.27696 25.7088 8.69434 25.0421 9.36482 24.8897C16.9601 23.1538 23.4751 23.9016 28.7308 27.1135C29.3165 27.4731 29.5022 28.2373 29.1427 28.8231ZM31.5832 23.3933C31.1332 24.1254 30.176 24.3564 29.4451 23.9064C24.0855 20.6114 15.9158 19.6573 9.57649 21.5816C8.75434 21.83 7.88601 21.3666 7.63649 20.5459C7.38887 19.7238 7.85244 18.8571 8.67315 18.6071C15.9143 16.41 24.9165 17.4743 31.0712 21.2564C31.8022 21.7064 32.0332 22.6635 31.5832 23.3935V23.3933ZM31.7927 17.74C25.3665 13.9231 14.7641 13.5721 8.62863 15.4342C7.64339 15.7331 6.60149 15.1769 6.30292 14.1916C6.00434 13.2059 6.56006 12.1647 7.54601 11.8652C14.5891 9.72711 26.2974 10.1402 33.696 14.5323C34.5841 15.0583 34.8746 16.2028 34.3484 17.0878C33.8246 17.974 32.677 18.2662 31.7936 17.74H31.7927Z" fill="#1ED760"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_30847_81626">
                                        <rect width="40" height="40" fill="white"/>
                                      </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">Spotify</h4>
                            <p className="text-center text-gray-500 text-sm font-normal leading-snug">Spotify is a digital music streaming service that offers users access to millions of songs, podcasts</p>
                        </div>
                    </div>
                    <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                        <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                            <a href="" className="w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
                                    <path d="M1.50371 36.8587L0.00174568 3.84178C-0.0478582 2.75137 0.965589 1.82725 2.28566 1.75918L36.3258 0.0039847C37.6696 -0.0652987 38.8269 0.777181 38.9109 1.88571C38.9141 1.92748 38.9156 1.96932 38.9156 2.01116V37.9889C38.9156 39.0996 37.8242 40 36.4779 40C36.4415 40 36.405 39.9993 36.3686 39.998L3.83032 38.7923C2.56308 38.7454 1.55128 37.9045 1.50371 36.8587Z" fill="#FF4785"/>
                                    <path d="M28.7362 4.91664L28.9686 0.303024L33.6434 0L33.8448 4.75786C33.8518 4.92344 33.6948 5.06236 33.4941 5.06815C33.4082 5.07062 33.3239 5.04789 33.2564 5.00399L31.4536 3.83239L29.3192 5.16811C29.1592 5.26825 28.9311 5.24241 28.8097 5.11041C28.7587 5.05484 28.7326 4.98632 28.7362 4.91664Z" fill="white"/>
                                    <path d="M22.7578 15.0769C22.7578 15.8593 29.1461 15.4843 30.0037 14.9347C30.0037 9.60652 26.5383 6.80664 20.1926 6.80664C13.8467 6.80664 10.2913 9.65008 10.2913 13.9152C10.2913 21.3437 22.4427 21.4859 22.4427 25.5378C22.4427 26.6752 21.7677 27.3505 20.2825 27.3505C18.3472 27.3505 17.5821 26.5351 17.6722 23.7628C17.6722 23.1613 10.2913 22.9738 10.0662 23.7628C9.49324 30.4812 14.5669 32.419 20.3726 32.419C25.9983 32.419 30.4088 29.9451 30.4088 25.4667C30.4088 17.5051 18.0773 17.7183 18.0773 13.7731C18.0773 12.1736 19.5174 11.9604 20.3726 11.9604C21.2727 11.9604 22.8928 12.0913 22.7578 15.0769Z" fill="white"/>
                                </svg>
                            </a>
                            <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">Storybook</h4>
                            <p className="text-center text-gray-500 text-sm font-normal leading-snug">Storybook is an open-source tool for developing UI components in isolation for React, Vue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
                                            


    {/* <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <a href="https://pagedone.io/"  className="flex justify-center lg:justify-start">
                        <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47 24.7231V7H54.4171C54.5916 7 54.816 7.00821 55.0903 7.02462C55.3645 7.03282 55.618 7.05744 55.8507 7.09846C56.8895 7.25436 57.7455 7.59487 58.4186 8.12C59.1001 8.64513 59.6029 9.30974 59.927 10.1138C60.2594 10.9097 60.4256 11.7959 60.4256 12.7723C60.4256 13.7405 60.2594 14.6267 59.927 15.4308C59.5945 16.2267 59.0876 16.8872 58.4061 17.4123C57.733 17.9374 56.8812 18.2779 55.8507 18.4338C55.618 18.4667 55.3604 18.4913 55.0778 18.5077C54.8035 18.5241 54.5833 18.5323 54.4171 18.5323H50.0042V24.7231H47ZM50.0042 15.7631H54.2925C54.4587 15.7631 54.6457 15.7549 54.8534 15.7385C55.0612 15.7221 55.2523 15.6892 55.4268 15.64C55.9255 15.5169 56.3161 15.2995 56.5986 14.9877C56.8895 14.6759 57.0931 14.3231 57.2094 13.9292C57.3341 13.5354 57.3964 13.1497 57.3964 12.7723C57.3964 12.3949 57.3341 12.0092 57.2094 11.6154C57.0931 11.2133 56.8895 10.8564 56.5986 10.5446C56.3161 10.2328 55.9255 10.0154 55.4268 9.89231C55.2523 9.84308 55.0612 9.81436 54.8534 9.80615C54.6457 9.78974 54.4587 9.78154 54.2925 9.78154H50.0042V15.7631Z" fill="#111827"/>
                            <path d="M66.0975 25.0923C65.1252 25.0923 64.3024 24.9118 63.6293 24.5508C62.9561 24.1815 62.445 23.6933 62.096 23.0862C61.7553 22.479 61.5849 21.8103 61.5849 21.08C61.5849 20.44 61.6929 19.8656 61.909 19.3569C62.1251 18.84 62.4575 18.3969 62.9063 18.0277C63.355 17.6503 63.9368 17.3426 64.6515 17.1046C65.1917 16.9323 65.8233 16.7764 66.5463 16.6369C67.2776 16.4974 68.0671 16.3703 68.9148 16.2554C69.7707 16.1323 70.6641 16.001 71.5949 15.8615L70.5228 16.4646C70.5311 15.5456 70.3234 14.8687 69.8995 14.4338C69.4757 13.999 68.761 13.7815 67.7554 13.7815C67.1488 13.7815 66.5629 13.921 65.9978 14.2C65.4327 14.479 65.0379 14.959 64.8135 15.64L62.0711 14.7908C62.4035 13.6667 63.0351 12.7641 63.9659 12.0831C64.9049 11.4021 66.1681 11.0615 67.7554 11.0615C68.9522 11.0615 70.0034 11.2544 70.9093 11.64C71.8234 12.0256 72.5007 12.6574 72.9412 13.5354C73.1822 14.0031 73.3276 14.4831 73.3775 14.9754C73.4274 15.4595 73.4523 15.9887 73.4523 16.5631V24.7231H70.822V21.8431L71.2583 22.3108C70.6517 23.2708 69.9411 23.9764 69.1267 24.4277C68.3206 24.8708 67.3108 25.0923 66.0975 25.0923ZM66.6959 22.7292C67.3773 22.7292 67.9591 22.6103 68.4411 22.3723C68.9231 22.1344 69.3054 21.8431 69.5879 21.4985C69.8788 21.1538 70.0741 20.8297 70.1738 20.5262C70.3317 20.1487 70.419 19.7179 70.4356 19.2338C70.4605 18.7415 70.473 18.3436 70.473 18.04L71.3954 18.3108C70.4896 18.4503 69.7126 18.5733 69.0643 18.68C68.4161 18.7867 67.8593 18.8892 67.3939 18.9877C66.9286 19.0779 66.5172 19.1805 66.1598 19.2954C65.8108 19.4185 65.5158 19.5621 65.2748 19.7262C65.0338 19.8903 64.8468 20.079 64.7138 20.2923C64.5891 20.5056 64.5268 20.7559 64.5268 21.0431C64.5268 21.3713 64.6099 21.6626 64.7761 21.9169C64.9423 22.1631 65.1833 22.36 65.4991 22.5077C65.8233 22.6554 66.2222 22.7292 66.6959 22.7292Z" fill="#111827"/>
                            <path d="M82.1078 31C81.3598 31 80.641 30.8851 79.9512 30.6554C79.2698 30.4256 78.6548 30.0933 78.1063 29.6585C77.5578 29.2318 77.109 28.7149 76.76 28.1077L79.5274 26.7538C79.785 27.2379 80.1465 27.5949 80.6119 27.8246C81.0856 28.0626 81.5884 28.1815 82.1203 28.1815C82.7435 28.1815 83.3003 28.0708 83.7907 27.8492C84.281 27.6359 84.6591 27.3159 84.925 26.8892C85.1993 26.4708 85.3281 25.9456 85.3115 25.3138V21.5354H85.6855V11.4308H88.3157V25.3631C88.3157 25.6995 88.2991 26.0195 88.2659 26.3231C88.2409 26.6349 88.1952 26.9385 88.1287 27.2338C87.9293 28.0954 87.547 28.801 86.9819 29.3508C86.4168 29.9087 85.7145 30.3231 84.8752 30.5938C84.0441 30.8646 83.1217 31 82.1078 31ZM81.846 25.0923C80.6077 25.0923 79.5274 24.7846 78.6049 24.1692C77.6825 23.5538 76.9678 22.7169 76.4608 21.6585C75.9539 20.6 75.7004 19.4062 75.7004 18.0769C75.7004 16.7313 75.9539 15.5333 76.4608 14.4831C76.9761 13.4246 77.7032 12.5918 78.6423 11.9846C79.5814 11.3692 80.6867 11.0615 81.9582 11.0615C83.238 11.0615 84.3101 11.3692 85.1744 11.9846C86.047 12.5918 86.7076 13.4246 87.1564 14.4831C87.6052 15.5415 87.8296 16.7395 87.8296 18.0769C87.8296 19.3979 87.6052 20.5918 87.1564 21.6585C86.7076 22.7169 86.0387 23.5538 85.1494 24.1692C84.2602 24.7846 83.1591 25.0923 81.846 25.0923ZM82.3072 22.4338C83.1134 22.4338 83.7616 22.2533 84.2519 21.8923C84.7505 21.5231 85.112 21.0103 85.3364 20.3538C85.5691 19.6974 85.6855 18.9385 85.6855 18.0769C85.6855 17.2072 85.5691 16.4482 85.3364 15.8C85.112 15.1436 84.7588 14.6349 84.2768 14.2738C83.7948 13.9046 83.1715 13.72 82.407 13.72C81.6008 13.72 80.936 13.9169 80.4124 14.3108C79.8889 14.6964 79.5024 15.2215 79.2531 15.8862C79.0038 16.5426 78.8792 17.2728 78.8792 18.0769C78.8792 18.8892 78.9997 19.6277 79.2407 20.2923C79.49 20.9487 79.8681 21.4697 80.375 21.8554C80.882 22.241 81.5261 22.4338 82.3072 22.4338Z" fill="#111827"/>
                            <path d="M97.6827 25.0923C96.3198 25.0923 95.1231 24.801 94.0926 24.2185C93.0621 23.6359 92.256 22.8277 91.6743 21.7938C91.1008 20.76 90.8141 19.5703 90.8141 18.2246C90.8141 16.7723 91.0967 15.5128 91.6618 14.4462C92.2269 13.3713 93.0122 12.5385 94.0178 11.9477C95.0234 11.3569 96.1869 11.0615 97.5082 11.0615C98.9044 11.0615 100.089 11.3856 101.061 12.0338C102.042 12.6738 102.769 13.5805 103.242 14.7538C103.716 15.9272 103.895 17.3097 103.778 18.9015H100.799V17.8185C100.791 16.3744 100.533 15.32 100.026 14.6554C99.5194 13.9908 98.7216 13.6585 97.6329 13.6585C96.4029 13.6585 95.4888 14.0359 94.8904 14.7908C94.2921 15.5374 93.9929 16.6328 93.9929 18.0769C93.9929 19.4226 94.2921 20.4646 94.8904 21.2031C95.4888 21.9415 96.3614 22.3108 97.5082 22.3108C98.2479 22.3108 98.8836 22.1508 99.4155 21.8308C99.9557 21.5026 100.371 21.0308 100.662 20.4154L103.629 21.3015C103.114 22.4995 102.316 23.4308 101.235 24.0954C100.163 24.76 98.9792 25.0923 97.6827 25.0923ZM93.0455 18.9015V16.6615H102.308V18.9015H93.0455Z" fill="#111827"/>
                            <path d="M111.708 25.0923C110.47 25.0923 109.39 24.7846 108.467 24.1692C107.545 23.5538 106.83 22.7169 106.323 21.6585C105.816 20.6 105.563 19.4062 105.563 18.0769C105.563 16.7313 105.816 15.5333 106.323 14.4831C106.838 13.4246 107.565 12.5918 108.505 11.9846C109.444 11.3692 110.549 11.0615 111.82 11.0615C113.1 11.0615 114.172 11.3692 115.037 11.9846C115.909 12.5918 116.57 13.4246 117.019 14.4831C117.467 15.5415 117.692 16.7395 117.692 18.0769C117.692 19.3979 117.467 20.5918 117.019 21.6585C116.57 22.7169 115.901 23.5538 115.012 24.1692C114.122 24.7846 113.021 25.0923 111.708 25.0923ZM112.169 22.4338C112.976 22.4338 113.624 22.2533 114.114 21.8923C114.613 21.5231 114.974 21.0103 115.199 20.3538C115.431 19.6974 115.548 18.9385 115.548 18.0769C115.548 17.2072 115.431 16.4482 115.199 15.8C114.974 15.1436 114.621 14.6349 114.139 14.2738C113.657 13.9046 113.034 13.72 112.269 13.72C111.463 13.72 110.798 13.9169 110.275 14.3108C109.751 14.6964 109.365 15.2215 109.115 15.8862C108.866 16.5426 108.741 17.2728 108.741 18.0769C108.741 18.8892 108.862 19.6277 109.103 20.2923C109.352 20.9487 109.73 21.4697 110.237 21.8554C110.744 22.241 111.388 22.4338 112.169 22.4338ZM115.548 24.7231V15.3938H115.174V7H118.203V24.7231H115.548Z" fill="#111827"/>
                            <path d="M127.395 25.0923C126.049 25.0923 124.873 24.7928 123.867 24.1938C122.861 23.5949 122.08 22.7703 121.523 21.72C120.975 20.6615 120.701 19.4472 120.701 18.0769C120.701 16.6821 120.983 15.4595 121.548 14.4092C122.113 13.359 122.899 12.5385 123.904 11.9477C124.91 11.3569 126.073 11.0615 127.395 11.0615C128.749 11.0615 129.93 11.361 130.935 11.96C131.941 12.559 132.722 13.3877 133.279 14.4462C133.835 15.4964 134.114 16.7067 134.114 18.0769C134.114 19.4554 133.831 20.6738 133.266 21.7323C132.709 22.7826 131.928 23.6072 130.923 24.2062C129.917 24.7969 128.741 25.0923 127.395 25.0923ZM127.395 22.3108C128.592 22.3108 129.481 21.9169 130.062 21.1292C130.644 20.3415 130.935 19.3241 130.935 18.0769C130.935 16.7887 130.64 15.7631 130.05 15C129.46 14.2287 128.575 13.8431 127.395 13.8431C126.589 13.8431 125.924 14.0236 125.4 14.3846C124.885 14.7374 124.503 15.2338 124.253 15.8738C124.004 16.5056 123.879 17.24 123.879 18.0769C123.879 19.3651 124.174 20.3949 124.765 21.1662C125.363 21.9292 126.24 22.3108 127.395 22.3108Z" fill="#111827"/>
                            <path d="M145.923 24.7231V18.3231C145.923 17.9046 145.894 17.441 145.836 16.9323C145.778 16.4236 145.64 15.9354 145.424 15.4677C145.217 14.9918 144.901 14.6021 144.477 14.2985C144.061 13.9949 143.496 13.8431 142.782 13.8431C142.399 13.8431 142.021 13.9046 141.647 14.0277C141.273 14.1508 140.933 14.3641 140.625 14.6677C140.326 14.9631 140.085 15.3733 139.902 15.8985C139.719 16.4154 139.628 17.08 139.628 17.8923L137.845 17.1415C137.845 16.0092 138.065 14.9836 138.506 14.0646C138.955 13.1456 139.611 12.4154 140.475 11.8738C141.34 11.3241 142.403 11.0492 143.667 11.0492C144.664 11.0492 145.487 11.2133 146.135 11.5415C146.783 11.8697 147.298 12.2882 147.681 12.7969C148.063 13.3056 148.345 13.8472 148.528 14.4215C148.711 14.9959 148.827 15.5415 148.877 16.0585C148.936 16.5672 148.965 16.9815 148.965 17.3015V24.7231H145.923ZM136.586 24.7231V11.4308H139.266V15.5538H139.628V24.7231H136.586Z" fill="#111827"/>
                            <path d="M157.87 25.0923C156.507 25.0923 155.31 24.801 154.28 24.2185C153.249 23.6359 152.443 22.8277 151.861 21.7938C151.288 20.76 151.001 19.5703 151.001 18.2246C151.001 16.7723 151.284 15.5128 151.849 14.4462C152.414 13.3713 153.199 12.5385 154.205 11.9477C155.21 11.3569 156.374 11.0615 157.695 11.0615C159.091 11.0615 160.276 11.3856 161.248 12.0338C162.229 12.6738 162.956 13.5805 163.43 14.7538C163.903 15.9272 164.082 17.3097 163.966 18.9015H160.986V17.8185C160.978 16.3744 160.72 15.32 160.213 14.6554C159.706 13.9908 158.909 13.6585 157.82 13.6585C156.59 13.6585 155.676 14.0359 155.078 14.7908C154.479 15.5374 154.18 16.6328 154.18 18.0769C154.18 19.4226 154.479 20.4646 155.078 21.2031C155.676 21.9415 156.548 22.3108 157.695 22.3108C158.435 22.3108 159.071 22.1508 159.603 21.8308C160.143 21.5026 160.558 21.0308 160.849 20.4154L163.816 21.3015C163.301 22.4995 162.503 23.4308 161.423 24.0954C160.351 24.76 159.166 25.0923 157.87 25.0923ZM153.233 18.9015V16.6615H162.495V18.9015H153.233Z" fill="#111827"/>
                            <path d="M24.5473 11.8941C25.1905 12.5063 25.2068 13.5149 24.5837 14.1468L18.7585 20.054C18.1354 20.686 17.1087 20.702 16.4654 20.0898C15.8222 19.4776 15.8059 18.469 16.429 17.8371L22.2542 11.9299C22.8773 11.2979 23.904 11.2819 24.5473 11.8941Z" fill="url(#paint0_linear_9129_4680)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.54673C0 2.03564 2.07211 0 4.62819 0H21.5399V0.00124069C28.9908 0.0998525 35 6.06429 35 13.4075C35 20.8123 28.8897 26.8151 21.3523 26.8151C18.6648 26.8151 16.1587 26.052 14.0463 24.7342L6.58815 31.9057C4.13431 34.2652 0 32.5573 0 29.1841V4.54673ZM11.5194 22.7055C9.15709 20.295 7.70452 17.0179 7.70452 13.4075C7.70452 12.5277 8.43056 11.8144 9.32619 11.8144C10.2218 11.8144 10.9479 12.5277 10.9479 13.4075C10.9479 19.0526 15.6061 23.6288 21.3523 23.6288C27.0985 23.6288 31.7567 19.0526 31.7567 13.4075C31.7567 7.76248 27.0985 3.18626 21.3523 3.18626H4.62819C3.86336 3.18626 3.24334 3.79536 3.24334 4.54673V29.1841C3.24334 29.7351 3.91866 30.014 4.31948 29.6286L11.5194 22.7055Z" fill="url(#paint1_linear_9129_4680)"/>
                            <defs>
                            <linearGradient id="paint0_linear_9129_4680" x1="35" y1="1.89063" x2="1.11152" y2="33.4573" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7C3AED"/>
                            <stop offset="0.993738" stop-color="#4F46E5"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_9129_4680" x1="35" y1="1.89063" x2="1.11152" y2="33.4573" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7C3AED"/>
                            <stop offset="0.993738" stop-color="#4F46E5"/>
                            </linearGradient>
                            </defs>
                            </svg>
                    </a>
                    <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                    <a href="javascript:;"  className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </a>
                </div>
                
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">About</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Features</a></li>
                    </ul>
                </div>
                
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Components Library</a></li>
                    </ul>
                </div>
                
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">User Guide</a></li>
                    </ul>
                </div>
                
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">News</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">New Updates</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Events</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="py-7 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g id="Social Media">
                            <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                            </g>
                          </svg>
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer> */}
                                                                          
                                            
                                            
                                                                        
                                            
   </div>
  );
}
