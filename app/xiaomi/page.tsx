"use client";
import React, { useState } from "react";
import { incremented } from "@/lib/featutres/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hook";
import { Button } from "antd";

export default function Hello() {
  const [selectedTab, setSelectedTab] = useState("热门");
  const counterState = useAppSelector((state) => state.counter.value);
  const tabs = ["热门", "穿戴"];
  const dispatch = useAppDispatch();
  const increase = () => {
    dispatch(incremented());
  };
  return (
    <div className="w-[1226px] mx-auto ">
      <div className="flex justify-between h-[58px] leading-[58px] bg-orange-400">
        <div className="ml-[15px]">智能穿戴</div>
        <div className="mr-[15px]">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={`ml-[15px] py-[3px] border-b-2 cursor-pointer ${
                selectedTab === tab
                  ? "text-red-500 border-red-500"
                  : "text-black border-transparent"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div>
        {counterState} <Button onClick={increase}>change</Button>
      </div>
      <div
        className="w-full my-6 grid grid-cols-5 grid-rows-4  gap-1 "
        style={{ height: "calc(100vh - 58px)" }}
      >
        <div className="col-span-1  row-span-4 p-6 bg-red-500 hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300"></div>

        <div className="col-span-1 row-span-2 bg-red-500 "></div>
        <div className="col-span-1 row-span-2 bg-red-500 "></div>

        <div className="col-span-1 row-span-2 bg-red-500 "></div>
        <div className="col-span-1 row-span-2 bg-red-500 "></div>

        <div className="col-span-1 row-span-2 bg-red-500 "></div>
        <div className="col-span-1 row-span-2 bg-red-500 "></div>

        <div className="col-span-1 row-span-2 bg-red-500 "></div>
        <div className="col-span-1 row-span-1 bg-red-500 "></div>
        <div className="col-span-1 row-span-1 bg-red-500 "></div>
      </div>
    </div>
  );
}
