import React from "react";
import axios from "axios";
import MemSidebar from "@/components/memSidebar";
import Link from "next/link";
const index = () => {
  return (
    <div>
      <MemSidebar />

      <div className="p-4 sm:ml-64">
        <div className="flex flex-col mt-20">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">AI Topic Wise Quiz!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <Link href="/member/quiz/topicquiz"><button className="btn btn-primary">Take Quiz</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">AI Topic Wise Quiz!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <Link href="/member/quiz/pdfquiz"><button className="btn btn-primary">Take Quiz</button></Link>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default index;
