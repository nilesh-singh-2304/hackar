import React, { useEffect, useState } from "react";
import MemSidebar from "@/components/memSidebar";
import axios from "axios";
const Yt = (yt) => {
  const [cont, setcont] = useState(yt.yt.items);
  const [query, setquery] = useState("");
  console.log(cont);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const handleChange = (e: any) => {
    setquery(e.target.value);
  };

  const handleSubmit = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/yt`, {
      query: query,
    });
    console.log(res.data.data);
    setcont(res.data.data.items);
  };

  return (
    <div>
      <MemSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="w-full flex justify-center items-center font-bold text-3xl">
            Youtube Section
          </div>
          <div className="w-full flex justify-center items-center font-bold text-xl mt-5">
            Search Your Topic
          </div>
          <div className="w-full flex justify-center items-center font-bold text-xl mt-5">
            <div className="bg-white mt-5 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-3/5 mx-auto overflow-hidden">
              <input
                value={query}
                onChange={handleChange}
                type="email"
                placeholder="Enter your topic"
                className="w-full outline-none bg-white pl-4 text-gray-800 text-sm"
              />
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2.5"
              >
                Enter
              </button>
            </div>
          </div>

          {/* yt */}
          <div className="p-4 font-[sans-serif]">
            <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
              <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center leading-10">
                  Stay updated with the latest blog posts.
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                {cont.map((yt) => (
                  <div
                    key={yt.snippet.thumbnails.default.url}
                    className="bg-white rounded overflow-hidden"
                  >
                    <img
                      src={yt.snippet.thumbnails.default.url}
                      alt="Blog Post 1"
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        {yt.snippet.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Channel : {yt.snippet.channelTitle}
                      </p>
                      <p className="text-gray-800 text-[13px] font-semibold mt-4">
                        Published : {yt.snippet.publishTime}
                      </p>
                      <a
                        href={`https://www.youtube.com/watch?v=${yt.id.videoId}`}
                        className="mt-4  btn "
                      >
                        Watch
                      </a>
                      {/* The button to open modal */}
                      <label htmlFor="my_modal_6" className=" ml-5 btn">
                        Get Summary
                      </label>

                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id="my_modal_6"
                        className="modal-toggle"
                      />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <h3 className="text-lg font-bold">Hello!</h3>
                          <p className="py-4">
                            Here the summary for your video will appear !!
                          </p>
                          <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">
                              Close!
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* yt */}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: "https://youtube-api52.p.rapidapi.com/search",
    params: {
      q: "nextjs",
      order: "relevance",
      videoDuration: "any",
      type: "video",
      maxResults: "25",
      part: "snippet",
    },
    headers: {
      "x-rapidapi-key": "efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1",
      "x-rapidapi-host": "youtube-api52.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  let yt = response.data;

  return {
    props: { yt: JSON.parse(JSON.stringify(yt)) },
  };
}

export default Yt;
