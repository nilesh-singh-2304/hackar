import React, { useEffect, useState } from "react";
import MemSidebar from "@/components/memSidebar";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const Community = ({posts}) => {
    const datee = Date()
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [imgurl, setimgurl] = useState('')
    const [date, setdate] = useState(datee)
    const [link1, setlink1] = useState('')
    const [link2, setlink2] = useState('')
    const [postss, setpostss] = useState(posts.slice().reverse())

    const router = useRouter()

    console.log(postss.slice().reverse())

    // useEffect(() => {
    //     console.log(title , content , imgurl , date , link1 , postss , link2)
    // }, [title , content , imgurl , date , link1 , link2 , postss])

    const handleChange = (e : any) => {
        if(e.target.name == 'title'){
            settitle(e.target.value)
        }else if(e.target.name == 'content'){
            setcontent(e.target.value)
        }else if(e.target.name == 'imgurl'){
            setimgurl(e.target.value)
        }else if(e.target.name == 'date'){
            // setdate(date.toLocaleLowerCase())
        }else if(e.target.name == 'link1'){
            setlink1(e.target.value)
        }else if(e.target.name == 'link2'){
            setlink2(e.target.value)
        }
    }

    const handleSubmit = async() =>{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/community`, {
            title : title,
            content : content,
            imgurl : imgurl,
            date : date,
            link1 : link1,
            link2 : link2
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

        settitle('')
        setcontent('')
        setimgurl('')
        setdate('')
        setlink1('')
        setlink2('')

        setTimeout(() => {
            router.reload()
        }, 3000);
    }

  return (
    <div>
        
      <MemSidebar />

      <div className="sm:ml-64">
        <div className="p-4">
          <div className="p-4 border-2 h-150 shadow-2xl overflow-y-scroll border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="w-full flex justify-center items-center font-bold text-3xl">
              Ed-Tech Community
            </div>

            <div className="w-full flex justify-center items-center font-bold text-3xl">
              <div className="bg-white min-w-150 flex justify-center rounded-xl items-center sm:px-6 min-w px-4 mt-5 shadow-xl py-10 font-[sans-serif]">
                <div className="max-w-xl mx-auto">
                  <div className="flex">
                    <h2 className="text-3xl w-full flex justify-center items-center font-extrabold text-[#333] inline-block">
                      LATEST POSTS
                    </h2>
                    <div className="w-full flex justify-end">
                      {/* <button className="btn btn-info flex justify-self-end mx-2"> <IoIosAddCircle className="scale-150" />Add Yours</button> */}
                      <label htmlFor="my_modal_6" className="btn btn-info mx-2">
                        <IoIosAddCircle className="scale-150" />
                        Add Yours
                      </label>

                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id="my_modal_6"
                        className="modal-toggle"
                      />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <form className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                              <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="title"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Post Title
                              </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                              <input
                                type="text"
                                name="content"
                                id="content"
                                value={content}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="content"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Content
                              </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                              <input
                                type="text"
                                name="imgurl"
                                id="imgurl"
                                value={imgurl}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="imgurl"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Image URL
                              </label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                              <div className="relative z-0 w-full mb-5 group">
                                <input
                                  type="text"
                                  name="date"
                                  id="date"
                                  value={date}
                                  onChange={handleChange}
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  htmlFor="date"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Date
                                </label>
                              </div>
                              <div className="relative z-0 w-full mb-5 group">
                                <input
                                  type="text"
                                  name="link1"
                                  id="link1"
                                  value={link1}
                                  onChange={handleChange}
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  htmlFor="link1"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Link 1
                                </label>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                              <div className="relative z-0 w-full mb-5 group">
                                <input
                                  type="text"
                                  name="link2"
                                  id="link2"
                                  value={link2}
                                  onChange={handleChange}
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  htmlFor="link2"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Link 2
                                </label>
                              </div>
                              
                            </div>
                            
                          </form>

                          <div className="modal-action">
                          <button
                              onClick={handleSubmit}
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Submit
                            </button>
                            <label htmlFor="my_modal_6" className="btn">
                              Close!
                            </label>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-error flex justify-self-end mx-2">
                        <IoChatboxEllipses className="scale-150" />
                        Chat
                      </button>
                    </div>
                  </div>
                  <div className="divider divider-neutral mt-10 mb-10"></div>
                  {postss.map((post) => (
                      <div>
                      <div className="max-w-xl shadow-lg scale-110 rounded-xl w-full lg:max-w-full lg:flex">
                        <div
                          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-l-xl text-center overflow-hidden "
                          title="Woman holding a mug"
                        >
                          <img src={post.imgurl} className="object-cover h-full w-full" alt="" />
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-gray-200 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                          <div className="mb-8">
                            
                            <div className="text-gray-900 font-bold text-xl mb-2">
                              {post.title}
                            </div>
                            <p className="text-gray-700 text-base">
                               {post.content}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <img
                              className="w-10 h-10 rounded-full mr-4"
                              src="/img/jonathan.jpg"
                              alt="Avatar of Jonathan Reinink"
                            />
                            <div className="text-sm">
                              <p className="text-gray-900 leading-none">
                                Jonathan Reinink
                              </p>
                              <p className="text-gray-600">{post.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider divider-neutral my-10"></div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps() {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/community`)

    const post = res.data.data
    console.log(post)
  return {
    props: {posts : JSON.parse(JSON.stringify(post))},
  };
}

export default Community;
