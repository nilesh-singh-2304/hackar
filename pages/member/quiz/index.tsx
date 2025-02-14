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
                src="https://canopylab.io/wp-content/uploads/2023/01/Blog-Creating-multiple-choice-quizzes-with-the-CanopyLAB-Quiz-engine.jpg"
                className="h-96"
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


        <div className="flex flex-col mt-20">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://cdn.analyticsvidhya.com/wp-content/uploads/2024/01/cover-page--scaled.jpg"
                className="h-96"
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

        
      </div>
    </div>
  );
};

export default index;
