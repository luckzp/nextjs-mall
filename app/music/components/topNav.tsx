"use client";
import React, { useState } from "react";

export default function TopNav() {
  const [selectedTab, setSelectedTab] = useState("发现音乐");
  const [selectedSubTab, setSelectedSubTab] = useState("推荐");
  const [isFocused, setIsFocused] = useState(false);

  const tabs = [
    "发现音乐",
    "我的音乐",
    "关注",
    "商城",
    "音乐人",
    "云推歌",
    "下载客户端",
  ];

  const subTabs = ["推荐", "排行榜", "歌单", "主播电台", "歌手", "新碟上架"];
  return (
    <div className="w-[1100px] mx-auto ">
      <div className="h-[70px] bg-[#242424] box-border border-b border-solid border-black">
        <div className="flex justify-between h-[69px] leading-[69px]">
          <div className="flex">
            <h1 className="text-[24px] bg-[url(/topbar.png)] w-[157px] pr-[20px]">
              <a className="block indent-[-99999px] cursor-pointer">
                网易云音乐
              </a>
            </h1>
            <ul className="flex ml-[10px]">
              {tabs.map((tab) => (
                <li key={tab} className="relative">
                  <a
                    className={`block text-[14px] px-[20px]  hover:bg-black hover:text-white" ${
                      selectedTab === tab
                        ? "text-white bg-black"
                        : "text-[#ccc]"
                    }`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </a>
                  {selectedTab === tab && (
                    <span className="absolute w-[12px] h-[6px] left-0 right-0 bottom-[-1px] mx-auto bg-[url('/topbar.png')] bg-[-226px_0]"></span>
                  )}
                  {tab === "下载客户端" && (
                    <span className="absolute w-[26px] h-[13px] top-[15px] right-[-2px] bg-[url('/topbar.png')] bg-[-192px_0]"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex text-[12px] items-center">
            <div className="relative flex items-center w-[158px] h-[32px] rounded-[32px] leading-[32px] bg-white text-center gap-[5px]">
              <span className="w-[13px] h-[14px] ml-[10px] bg-[url('/topbar.png')] bg-[-10px_-108px]"></span>
              <input
                type="text"
                className=" leading-[18px] w-[122px] focus:outline-none focus:shadow-outline z-10 opacity-0 focus:opacity-100"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              ></input>
              {!isFocused && (
                <label className="absolute top-0 left-[30px]">
                  音乐/视频/电台/用户
                </label>
              )}
            </div>
            <div className="ml-[22px] w-[90px] h-[32px] leading-[28px] text-center box-border border border-solid border-[#4F4F4F] rounded-[20px] text-[#ccc] hover:text-white hover:border-white">
              <a className="hover:cursor-pointer">创作者中心</a>
            </div>
            <div className="text-[#363333] hover:text-[#999]  ml-[22px]">
              <a className="hover:cursor-pointer">登录</a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[35px] bg-[#C20C0C]">
        <ul className="flex pl-[190px] text-[12px] gap-[40px]">
          {subTabs.map((subTab) => (
            <li key={subTab} className="text-white text-center group">
              <a
                className={`block my-[5px] px-[13px] py-[3px]  rounded-[20px] group-hover:bg-[#9B0909] ${
                  selectedSubTab === subTab ? "bg-[#9B0909]" : ""
                }`}
              >
                {subTab}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
