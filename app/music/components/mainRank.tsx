import React, { useState } from "react";

export default function mainRank() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-[230px] box-border border-r-[1px] border-solid border-[#d3d3d3] h-full ">
      <div className="m-4 flex">
        <img
          src="/rank.jpg"
          className="block h-[80px] w-[80px] shadow-lg"
        ></img>
        <div className="h-[80px] flex flex-col justify-around">
          <div className="ml-2 text-[14px] font-bold text-black">飙升榜</div>
          <div className="mb-5">
            <a className="inline-block ml-2 w-[22px] h-[22px] bg-[url('/index.png')] bg-[-267px_-205px]"></a>
            <a className="inline-block ml-2 w-[22px] h-[22px] bg-[url('/index.png')] bg-[-300px_-205px]"></a>
          </div>
        </div>
      </div>
      <ul>
        <li className="bg-[#e8e8e8] h-[32px] leading-[32px]">
          <div
            className="ml-5 flex"
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
          >
            <span className="text-[16px] mr-3 text-red-600">1</span>
            <div className="flex w-full">
              <a
                href=""
                className="align-top flex-1 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                城北的花
              </a>
              {isFocused && (
                <a className="w-[17px] h-[17px] mr-[30px] mt-[8px] bg-[-267px_-268px] bg-[url('/index.png')] "></a>
              )}
            </div>
          </div>
        </li>
        <li className="h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3 text-red-500">2</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className="bg-[#e8e8e8] h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3 text-red-400">3</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className=" h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3">4</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className="bg-[#e8e8e8] h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3">5</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className=" h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3">6</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className="bg-[#e8e8e8] h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3">7</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className=" h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3">8</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className="bg-[#e8e8e8] h-[32px] leading-[32px]">
          <div className="ml-5">
            <span className="text-[16px] mr-3">9</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
        <li className=" h-[32px] leading-[32px]">
          <div className="ml-3">
            <span className="text-[16px] mr-2 pl-1">10</span>
            <a href="" className="align-top">
              城北的花
            </a>
          </div>
        </li>
      </ul>
      <div className="bg-[#e8e8e8] h-[34px] leading-[34px]">
        <span className="ml-[140px]">查看全部{`>`} </span>
      </div>
    </div>
  );
}
