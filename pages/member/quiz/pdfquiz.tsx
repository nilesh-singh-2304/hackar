import React, { useState } from "react";
import axios from "axios";
import MemSidebar from "@/components/memSidebar";
import Link from "next/link";
const Pdfquiz = () => {
  const [topic, settopic] = useState("");
  const [noque, setnoque] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [mcq, setmcq] = useState([]);
  const [check, setcheck] = useState(false)
  const [fill, setfill] = useState([]);
  const [truef, settruef] = useState([]);
  const [qna, setqna] = useState([]);

  const handleSubmit = async () => {

    try {
      let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${`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`}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "x-ai/grok-4.1-fast:free",
    "messages": [
      {
        "role": "user",
        "content": `I'll give you 3 parameters : topic , no of question , difficulty generae a mcq quiz out of them haveing the amount of question mentioned on given topic and remember to give response in form of a json and also give the options and the correct aswer also .
         topic : ${topic} ,
         difficulty : ${difficulty} , 
         no of questions : ${noque}
         
         Output format:
{
  "topic": "",
  "difficulty": "",
  "questions": [
    {
      "question": "",
      "options": ["", "", "", ""],
      "answer": ""
    }
  ]
}`
      }
    ],
    "reasoning": {"enabled": true}
  })
})

const data = await response.json();
const rawJson = data.choices[0].message.content;
const quizJson = JSON.parse(rawJson);
console.log(quizJson.questions);
      setmcq(quizJson.questions);
      // console.log(response.data.trivia);
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
            <button onClick={handleSubmit} className="btn  ml-2 glass">
              Get Quiz
            </button>
          </div>
        </div>

        <div className="mockup-browser mt-10 bg-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input">https://quested.com</div>
          </div>
          <div className="bg-base-200 flex flex-col overflow-y-scroll max-h-128 mt-10 justify-center px-4 py-16">
            {mcq.map((mcq) => (
              <div key={mcq.question} className="bg-base-100 my-1 shadow-xl">
                <div className="">
                  <h2 className="card-title">{mcq.question}</h2>
                  {mcq.options.map((opts) => (
                    <p key={opts}>{opts}</p>
                  ))}
                  {/* <p>{mcq.correct_answer}</p> */}
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

export default Pdfquiz;
