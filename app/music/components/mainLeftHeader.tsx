import React from "react";

export default function mainLeftHeader() {
  return (
    <div className="flex justify-between border-b-[2px] border-solid border-[#C10D0C] items-center text-[#666]">
      <div className="flex">
        <div className="bg-[url('/index.png')] bg-[-225px_-156px] h-[32px] w-[32px]"></div>
        <div className="text-[20px] text-black"> 热门推荐</div>
        <ul className="flex ml-3 items-center ">
          <li className="flex">
            <a className="block mx-3">华语</a>
            <span className="text-[12px]">|</span>
          </li>

          <li className="flex">
            <a className="block mx-3 ">流行</a>
            <span className="text-[12px]">|</span>
          </li>
          <li className="flex">
            <a className="block mx-3 ">摇滚</a>
            <span className="text-[12px]">|</span>
          </li>
          <li className="flex">
            <a className="block mx-3 ">民谣</a>
            <span className="text-[12px]">|</span>
          </li>
          <li className="flex">
            <a className="block mx-3 ">电子</a>
            <span className="text-[12px]">|</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mr-2">更多</div>
        <div className=" bg-[url('/index.png')] bg-[0_-240px] h-[12px] w-[12px]"></div>
      </div>
    </div>
  );
}
