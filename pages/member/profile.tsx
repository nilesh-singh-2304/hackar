import React from "react";
import MemSidebar from "@/components/memSidebar";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Profile = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);
  return (
    <div>
      <MemSidebar />
      <div className="p-4 sm:ml-64">
        <div className="w-full flex justify-center items-center font-bold text-3xl mt-14 mb-1">
          My Profile
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-2/5 pr-1">
            <div className="flex-col">
              <div className="p-4 border-2 h-96 mb-2 flex-col border-gray-200 shadow-xl rounded-lg dark:border-gray-700">
                <div className="h-4/6 mb-2 flex justify-between px-4 items-center">
                  {/* <Image src={''} alt='' height={100} width={100}/> */}
                  <div className="">
                    <Image
                      loader={() =>
                        "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
                      }
                      src={
                        "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
                      }
                      loading="lazy"
                      width={190}
                      height={190}
                      alt="Photo by Fakurian Design"
                      className="rounded-md scale-110 "
                    ></Image>
                  </div>
                  <div className=" mr-5">
                    <p className="mt-2">Name : Nilesh Singh</p>
                    <p className="mt-2">Email : 0R0o8@example.com</p>
                    <p className="mt-2">College : YMCA Faridabad</p>
                  </div>
                </div>

                <div className="flex h-2/6 text-black mt-2 w-full ">
                  <div className="w-1/3 flex flex-col items-center justify-center  mx-1">
                    <div className="stats stats-vertical shadow-lg border border-white scale-95">
                      <div className="stat">
                        <div className="stat-title">No of Lectures</div>
                        <div className="stat-value text-center">51</div>
                        <div className="stat-desc">Duration : 5 months</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col items-center justify-center  mx-1">
                    <div className="stats stats-vertical  shadow-lg border border-white scale-95">
                      <div className="stat">
                        <div className="stat-title text-center">No of quizes</div>
                        <div className="stat-value text-center">227</div>
                        <div className="stat-desc text-center">Duration : 2 months</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 flex flex-col items-center justify-center  mx-1">
                    <div className="stats stats-vertical shadow-lg border border-white scale-95">
                      <div className="stat">
                        <div className="stat-title text-center">No of Courses</div>
                        <div className="stat-value text-center">9</div>
                        <div className="stat-desc text-center">Duration : 3 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-2 flex items-center justify-center h-52 rounded-lg dark:border-gray-700">
                <div className="embla" ref={emblaRef}>
                  <div className="embla__container">
                    <div className="embla__slide">
                      <div className="card w-96 shadow-xl">
                        <div className="card-body bg-cover bg-[url(https://aitsrajampet.ac.in/images/pdf/ai/Artificial-Intelligence-and-Machine-Learning.png)]  ">
                          <h2 className="card-title text-white">Machine Learning</h2>
                          <p className=" text-white">
                          ML is revolutionizing industries worldwide, from EdTech and healthcare...
                          </p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="embla__slide">
                      <div className="card w-96 shadow-xl">
                        <div className="card-body bg-cover bg-[url(https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg)] ">
                          <h2 className="card-title text-white">Artificial Intelligence</h2>
                          <p className=" text-white">
                          Artificial Intelligence (AI) is transforming the world by enabling....
                          </p>
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
          <div className="w-3/5 pl-1">
            <div className="flex-col">
              <div className="py-2 flex flex-col border-2 mb-4 h-128 border-gray-200 shadow-xl rounded-lg dark:border-gray-700">
                <div className="flex w-full h-2/5">
                  <div className="card mx-2 w-96 shadow-xl">
                    <div className="card-body bg-cover bg-[url(https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75)] ">
                      <h2 className="card-title text-white">Next JS</h2>
                      <p className="text-white">Next.js is a powerful React framework that enhances web development by providing server-side rendering (SSR)</p>
                      <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                      </div>
                    </div>
                  </div>
                  <div className="card mx-2 w-96 shadow-xl">
                    <div className="card-body bg-cover bg-[url(https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png)] ">
                      <h2 className="card-title text-white">React JS</h2>
                      <p className=" text-white">React.js is a JavaScript library for building fast, interactive, and scalable user interfaces</p>
                      <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full  h-3/5 flex justify-center items-center">
                  <div className="w-1/2 h-72 mx-2 mt-4 mb-2 flex justify-center items-center">
                    <div className="flex border border-white p-3 rounded-lg flex-col scale-110">
                      <div className="w-full flex justify-center items-center mb-4">
                        <h1 className="font-bold">Progress</h1>
                      </div>
                      <div className="flex">
                        <p>Next JS</p>
                        <progress
                          className="my-2 mx-1 progress progress-error w-56"
                          value={50}
                          max="100"
                        >
                          html
                        </progress>
                      </div>
                      <div className="flex">
                        <p>React JS</p>
                        <progress
                          className="my-2 mx-1 progress progress-error w-56"
                          value={26}
                          max="100"
                        >
                          html
                        </progress>
                      </div>
                      <div className="flex">
                        <p>JS</p>
                        <progress
                          className="my-2 mx-1 progress progress-error w-56"
                          value={49}
                          max="100"
                        >
                          html
                        </progress>
                      </div>
                      <div className="flex">
                        <p>APIs</p>
                        <progress
                          className="my-2 mx-1 progress progress-error w-56"
                          value={83}
                          max="100"
                        >
                          html
                        </progress>
                      </div>
                      <div className="flex">
                        <p>AI</p>
                        <progress
                          className="my-2 mx-1 progress progress-error w-56"
                          value={100}
                          max="100"
                        >
                          html
                        </progress>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 h-72 mx-2 mt-4 mb-2 flex flex-col">
                    <div className="w-full h-1/2 my-1 flex">
                      <div className="w-1/2 h-full flex justify-center items-center mx-1">
                        <div className="stats stats-vertical shadow scale-110 border border-white">
                          <div className="stat">
                            <div className="stat-title text-center">Rank</div>
                            <div className="stat-value">31k</div>
                            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 h-full flex justify-center items-center mx-1">
                        <div className="stats stats-vertical shadow scale-110 border border-white">
                          <div className="stat">
                            <div className="stat-title">No of Badges</div>
                            <div className="stat-value text-center">3</div>
                            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-1/2 my-1 flex items-center justify-center">
                      <div className="w-1/2 h-full flex justify-center items-center mx-1">
                        <div className="stats stats-vertical shadow scale-110 border border-white">
                          <div className="stat">
                            <div className="stat-title">Communities</div>
                            <div className="stat-value text-center">5</div>
                            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-1 mt-4 flex h-16 rounded-lg dark:border-gray-700">
                <div className="w-1/2 border-2 shadow-xl border-black rounded-lg h-full mx-1 flex justify-center gap-2 py-2 items-center">
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
                <div className="w-1/2 border-2 shadow-xl border-black rounded-lg h-full mx-1 flex justify-center gap-2 py-2 items-center">
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
  );
};

export default Profile;
