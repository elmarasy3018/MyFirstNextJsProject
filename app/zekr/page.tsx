"use client";
import Link from "next/link";
import { useState } from "react";

function Zekr() {
  const [counter, setCounter] = useState(0);
  const [current, setCurrent] = useState(0);
  const [array] = useState([
    "سبحان الله",
    "الحمد لله",
    "الله أكبر",
    "أستغفر الله",
  ]);

  let currentName = array[current];

  const buttonClicked = () => {
    setCounter(counter + 1);
    if (current < 3) {
      if (counter == 32) {
        setCurrent(current + 1);
        currentName = array[current];
        setCounter(0);
      }
    }
  };

  const reset = () => {
    setCounter(0);
    setCurrent(0);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-14">
        <h3 className="text-7xl">Zekr Page</h3>
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full w-36 h-36 grid justify-center content-evenly">
          <span className="text-white text-4xl">{counter}</span>
        </div>
        <div className="">
          <button
            onClick={buttonClicked}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="relative px-5 py-2.5 text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {currentName}
            </span>
          </button>
          <button
            onClick={reset}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <span className="relative px-5 py-2.5 text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              تصفير
            </span>
          </button>
        </div>
        <Link href="/">Go To Home</Link>
      </main>
    </>
  );
}

export default Zekr;
