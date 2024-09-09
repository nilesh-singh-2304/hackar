import React from 'react'
import MemSidebar from '@/components/memSidebar'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const profile = () => {
   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({delay : 2000})])
  return (
    <div>
      <MemSidebar />
      <div className="p-4 sm:ml-64">
      <div className='w-full flex justify-center items-center font-bold text-3xl mt-14 mb-1'>My Profile</div>
      <div className='w-full flex justify-center items-center'>
      <div className='w-2/5 pr-1'>
      <div className='flex-col'>
      <div className="p-4 border-2 h-96 mb-2 flex-col border-gray-200 shadow-xl rounded-lg dark:border-gray-700">
         
         <div className="h-4/6 mb-2 flex justify-between px-4 items-center"> 
           {/* <Image src={''} alt='' height={100} width={100}/> */}
           <div className=''><Image
                  loader={() => 'https://i.scdn.co/image/ab67616d00001e02c77e33a16861450b8e858dcb'}
                    src={'https://i.scdn.co/image/ab67616d00001e02c77e33a16861450b8e858dcb'}
                    loading="lazy"
                    width={190}
                    height={190}
                    alt="Photo by Fakurian Design"
                    className='rounded-md scale-110 '
                  ></Image></div>
                  <div className=''><Image
                  loader={() => 'https://i.scdn.co/image/ab67616d00001e02c77e33a16861450b8e858dcb'}
                    src={'https://i.scdn.co/image/ab67616d00001e02c77e33a16861450b8e858dcb'}
                    loading="lazy"
                    width={190}
                    height={190}
                    alt="Photo by Fakurian Design"
                    className='rounded-md scale-110 '
                  ></Image></div>
         </div>

         <div className='flex h-2/6 mt-2 w-full '>
          
           <div className='w-1/3 flex flex-col items-center justify-center  mx-1'>
           <div className="stats stats-vertical bg-success shadow scale-95">
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  </div>
           </div>
           <div className='w-1/3 flex flex-col items-center justify-center  mx-1'>
           <div className="stats stats-vertical bg-success shadow scale-95">
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  </div>
           </div>
           <div className='w-1/3 flex flex-col items-center justify-center  mx-1'>
           <div className="stats bg-success stats-vertical shadow scale-95" >
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  </div>
           </div>
         </div>
         
      </div>
      <div className=" mt-2 flex items-center justify-center h-52 rounded-lg dark:border-gray-700">
      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
        <div className="card bg-primary w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
   
        </div>
        <div className="embla__slide">
        <div className="card bg-primary w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
   
        </div>
        <div className="embla__slide">
        <div className="card bg-primary w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
   
        </div>
      </div>
    </div>
         
      </div>
      </div>
      </div>
      <div className='w-3/5 pl-1'>
      <div className="flex-col">
      <div className="py-2 flex flex-col border-2 mb-4 h-128 border-gray-200 shadow-xl rounded-lg dark:border-gray-700">
         
      <div className='flex w-full h-2/5'>
      <div className="card bg-primary mx-2 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-primary mx-2 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>

      <div className='w-full h-3/5 flex justify-center items-center'>
          <div className='w-1/2 h-72 mx-2 mt-4 mb-2 flex justify-center items-center'>
               <div className='flex flex-col scale-110'>
                  <div className="w-full flex justify-center items-center mb-4"><h1 className='font-bold'>Progress</h1></div>
               <div className='flex'>
                  <p>HTML</p>
                  <progress className="my-2 mx-1 progress progress-error w-56" value={0} max="100">html</progress>
               </div>
               <div className='flex'>
                  <p>HTML</p>
                  <progress className="my-2 mx-1 progress progress-error w-56" value={0} max="100">html</progress>
               </div>
               <div className='flex'>
                  <p>HTML</p>
                  <progress className="my-2 mx-1 progress progress-error w-56" value={0} max="100">html</progress>
               </div>
               <div className='flex'>
                  <p>HTML</p>
                  <progress className="my-2 mx-1 progress progress-error w-56" value={0} max="100">html</progress>
               </div>
               <div className='flex'>
                  <p>HTML</p>
                  <progress className="my-2 mx-1 progress progress-error w-56" value={0} max="100">html</progress>
               </div>

               </div>
          </div>
          <div className='w-1/2 h-72 mx-2 mt-4 mb-2 flex flex-col'>
             <div className='w-full h-1/2 my-1 flex'>
             <div className='w-1/2 h-full flex justify-center items-center mx-1'>
             <div className="stats stats-vertical shadow scale-110 bg-error">
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  </div>
             </div>
             <div className='w-1/2 h-full flex justify-center items-center mx-1'>
             <div className="stats stats-vertical shadow scale-110 bg-error">
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  </div>
             </div>
             </div>

             <div className='w-full h-1/2 my-1 flex'>
             <div className='w-1/2 h-full flex justify-center items-center mx-1'>
             <div className="stats stats-vertical shadow scale-110 bg-error">
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  </div>
             </div>
             <div className='w-1/2 h-full flex justify-center items-center mx-1'>
             <div className="stats stats-vertical shadow scale-110 bg-error">
  <div className="stat">
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  </div>
             </div>
             </div>
          </div>
      </div>
   
         
      </div>
      <div className="px-1 mt-4 flex h-16 rounded-lg dark:border-gray-700">
         <div className='w-1/2 border-2 shadow-xl border-black rounded-lg h-full mx-1 flex justify-center gap-2 py-2 items-center'>
         <div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
   
         </div>
         <div className='w-1/2 border-2 shadow-xl border-black rounded-lg h-full mx-1 flex justify-center gap-2 py-2 items-center'>
         <div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
   
         </div>
         
      </div>
      </div>
      </div>
      </div>
   </div>
    </div>
  )
}

export default profile
