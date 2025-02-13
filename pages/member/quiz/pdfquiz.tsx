import React, { useState } from "react";
import axios from "axios";
import MemSidebar from "@/components/memSidebar";
import Link from "next/link";
const pdfquiz = () => {
  const [topic, settopic] = useState("");
  const [noque, setnoque] = useState(0);
  const [difficulty, setdifficulty] = useState("");
  const [mcq, setmcq] = useState([]);
  const [check, setcheck] = useState(false)
  const [fill, setfill] = useState([]);
  const [truef, settruef] = useState([]);
  const [qna, setqna] = useState([]);

  const handleSubmit = async () => {
    const options = {
      method: "POST",
      url: "https://ai-trivia-questions-generator.p.rapidapi.com/fromText/multiChoice",
      headers: {
        "x-rapidapi-key": "efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1",
        "x-rapidapi-host": "ai-trivia-questions-generator.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        count: noque,
        difficulty: difficulty,
        choicesCount: 4,
        text: topic,
      },
    };

    try {
      const response = await axios.request(options);
      setmcq(response.data.trivia);
      console.log(response.data.trivia);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <MemSidebar />

      <div className="p-4 mt-20 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center text-4xl font-bold">Give Topic Here</div>
          <div className="w-screen flex justify-center items-center pr-10 mt-5">
            <input
              value={topic}
              onChange={(e) => settopic(e.target.value)}
              type="text"
              placeholder="Topic for the Quiz"
              className="input input-bordered input-accent w-full max-w-xs mr-4"
            />
            <input
              value={noque}
              onChange={(e) => setnoque(e.target.value)}
              type="number"
              placeholder="No of Questions per Section"
              className="input input-bordered input-accent w-full max-w-xs mr-4"
            />

            <select
              value={difficulty}
              onChange={(e) => {
                setdifficulty(e.target.value);
                console.log(difficulty);
              }}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                {" "}
                Difficulty ?
              </option>
              <option value="EASY">EASY</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HARD">HARD</option>
              <option value="VERY_HARD">VERY_HARD</option>
            </select>
            <button onClick={handleSubmit} className="btn glass">
              Get Quiz
            </button>
          </div>
        </div>

        <div className="mockup-browser bg-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="bg-base-200 flex flex-col overflow-y-scroll max-h-128 mt-10 justify-center px-4 py-16">
            {mcq.map((mcq) => (
              <div key={mcq.question} className="bg-base-100 my-1 shadow-xl">
                <div className="">
                  <h2 className="card-title">{mcq.question}</h2>
                  {mcq.incorrect_answers.map((opts) => (
                    <p key={opts}>{opts}</p>
                  ))}
                  <p>{mcq.correct_answer}</p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setcheck(true)} className="btn glass secondary">Check Answers</button>
          {check && 
            <div className="bg-base-200 flex flex-col overflow-y-scroll max-h-128 mt-10 justify-center px-4 py-16">
            {mcq.map((mcq) => (
              <div key={mcq.question} className="bg-base-100 my-1 shadow-xl">
                <div className="">
                  <h2 className="card-title">{mcq.correct_answer}</h2>
                </div>
              </div>
            ))}
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default pdfquiz;
