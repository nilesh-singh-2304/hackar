import React, { useEffect, useState } from "react";
import MemSidebar from "@/components/memSidebar";
import axios from "axios";

const Summary = () => {
  const [url, seturl] = useState("");
  const [show, setshow] = useState(false);
  const [resp, setresp] = useState("trgtgttgetgg");

  // useEffect(() => {
  //     console.log(url)
  // }, [url])

  const handleChange = (e: any) => {
    seturl(e.target.value);
  };

  const handleSubmit = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/summary`,
      {
        url: url,
      }
    );
    console.log(res.data.data.summary);
    setshow(true);
    setresp(res.data.data.summary);
  };
  return (
    <div>
      <MemSidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="w-full flex justify-center items-center font-bold text-3xl">
            AI-Driven Summarizers
          </div>

          <div className="font-[sans-serif] px-6 py-16 pt-8 bg-gradient-to-t ">
            <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
              {/* <p className="text-sm font-bold text-blue-600 mb-4"><span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE IN READYMADEUI</p> */}
              <h2 className="text-gray-100 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">
                Call AI to Elevate Your Experience
              </h2>
              <div className="mt-8">
              </div>

              <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
                <input
                  value={url}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your link"
                  className="w-full outline-none bg-white pl-4 text-gray-800 text-sm"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2.5"
                >
                  Enter
                </button>
              </div>

              {show && (
                <div className=" mt-5 w-full flex justify-center items-center font-bold text-md">
                  <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">
                      {resp}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
