import React, { useEffect, useState } from 'react'
import MemSidebar from '@/components/memSidebar';
import axios from 'axios';
const Yt = (yt) => {
    const [cont, setcont] = useState(yt.yt)
    const [query, setquery] = useState('')
    console.log(cont)

    useEffect(() => {
        console.log(query)
    }, [query])

    const handleChange = (e : any) =>{
        setquery(e.target.value)
    }

    const handleSubmit = async() =>{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/yt`, {
            query : query
          }
        )
        console.log(res.data.data)
        setcont(res.data.data)
    }

  return (
    <div>

      <MemSidebar />
      <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className='w-full flex justify-center items-center font-bold text-3xl'>Youtube Section</div>
      <div className='w-full flex justify-center items-center font-bold text-xl mt-5'>Search Your Topic</div>
      <div className='w-full flex justify-center items-center font-bold text-xl mt-5'>
      <div className="bg-white mt-5 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-3/5 mx-auto overflow-hidden">
          <input value={query} onChange={handleChange}  type='email' placeholder='Enter your email' className="w-full outline-none bg-white pl-4 text-gray-800 text-sm" />
          <button onClick={handleSubmit} type='button' 
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2.5">Subscribe</button>
        </div>
      </div>


       {/* yt */}
       <div className="p-4 font-[sans-serif]">
      <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center leading-10">Stay updated with the latest blog posts.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {cont.map((yt) =>(
            <div key={yt.thumbnail} className="bg-white rounded overflow-hidden">
            <img src={yt.thumbnail} alt="Blog Post 1" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{yt.title}</h3>
              <p className="text-gray-500 text-sm">Channel : {yt.page_name}</p>
              <p className="text-gray-800 text-[13px] font-semibold mt-4">Duration : {yt.duration}</p>
              <a href={yt.link} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]">Watch</a>
            </div>
          </div>
          ) ) } 
          
        </div>
      </div>
    </div>
    {/* yt */}
   </div>
</div>
    </div>


  )
}

export async function getServerSideProps() {
    const options = {
        method: 'POST',
        url: 'https://yt-api5.p.rapidapi.com/search',
        headers: {
          'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
          'x-rapidapi-host': 'yt-api5.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: 'next js',
          limit: 10
        }
      };
      
      
          const response = await axios.request(options);
          let yt = response.data;
      
  return {
    props: {yt : JSON.parse(JSON.stringify(yt))},
  }
}

export default Yt
