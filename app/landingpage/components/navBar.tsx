"use client";
import React, { useState } from "react";

export default function navBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0 ">
        <div className="flex flex-col px-6 py-6 relative lg:flex-row lg:items-center lg:justify-between lg:px-0 lg:py-1 xl:px-20 border-b-2 border-solid">
          <a href="#" className="flex ">
            <img className="w-[95px] h-[80px]" src="./ArtifyAI.png"></img>
            <h2 className=" text-[30px] h-[80px] leading-[80px] font-bold  tracking-tight ">
              大画智绘
            </h2>
          </a>

          <div
            className={`flex flex-col mt-5 space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <a
              href="https://ewe8txd9jt.feishu.cn/wiki/Esmywsooli72huklgBhceX9hnX5"
              target="_blank"
              className="text-xl  rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Documents
            </a>
            <a
              href="#"
              className="text-xl rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Pricing
            </a>
            <a
              href="#"
              className=" text-xl rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              FAQs
            </a>
          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>
  );
}
