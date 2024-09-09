import React, { useState } from "react";
import AdmSidebar from "@/components/adminsidebar";
import { FaCirclePlus } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
const AdminIndex = ({course}) => {
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [reference, setreference] = useState('')
  const [launch, setlaunch] = useState('')
  const [imgurl, setimgurl] = useState('')
  const [video, setvideo] = useState('')

  const [coursee, setcourse] = useState(course)
  console.log(coursee)

  const router = useRouter()
  const handleChange = (e : any) => {
    if(e.target.name == 'name') {
      setname(e.target.value)
    } else if(e.target.name == 'price') {
      setprice(e.target.value)
    } else if(e.target.name == 'reference') {
      setreference(e.target.value)
    } else if(e.target.name == 'launch') {
      setlaunch(e.target.value)
    } else if(e.target.name == 'imgurl') {
      setimgurl(e.target.value)
    } else if(e.target.name == 'video') {
      setvideo(e.target.value)
    }
  }

  const handleSubmit = async() => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/course`, {
      name : name,
      price : price,
      reference : reference,
      launch : launch,
      imgurl : imgurl,
      video : video
    }
  )

  console.log(res.data)
        if(res.data.success){
            toast.success('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
        else{
            toast.error('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }

        setname('')
        setprice('')
        setreference('')
        setlaunch('')
        setimgurl('')
        setvideo('')

        setTimeout(() => {
            router.reload()
        }, 3000);
  }

  return (
    <div>
      <AdmSidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="w-full flex justify-center items-center font-bold text-3xl">
            Courses
          </div>

          <div className="w-full flex justify-center items-center mt-5">
            
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-warning">
            <FaCirclePlus className="scale-150 mr-1" />
            Add Course
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                

<form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input value={name} onChange={handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={imgurl} onChange={handleChange} type="text" name="imgurl" id="imgurl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="imgurl" className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={reference} onChange={handleChange} type="text" name="reference" id="reference" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="reference" className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Reference Links</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={launch} onChange={handleChange} type="text" name="launch" id="launch" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="launch" className="peer-focus:font-medium absolute text-sm text-gray-900  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Launch Date</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={price} onChange={handleChange} type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={video} onChange={handleChange} type="text"  name="video" id="video" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="video" className="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Video Links</label>
    </div>
  </div>
  
</form>

                <div className="modal-action">
                <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  <label htmlFor="my_modal_7" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table mt-10">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Launch Date</th>
                  <th>Add Videos</th>
                  <th>Add Reference</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {coursee.map((course) => (
                  <tr>
                  <td>{course.name}</td>
                  <td>{course.price}</td>
                  <td>{course.launch}</td>
                  <td>
                    <FaCirclePlus className="scale-150 md:ml-5 cursor-pointer" />
                  </td>
                  <td>
                    <FaCirclePlus className="scale-150 md:ml-7 cursor-pointer" />
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps() {

  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/course`)

  const course = res.data.data
  console.log(course)
return {
  props: {course : JSON.parse(JSON.stringify(course))},
};
}

export default AdminIndex;
