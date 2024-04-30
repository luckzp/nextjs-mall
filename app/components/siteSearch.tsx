"use client";
import React from "react";
import { Input } from "antd";
const { Search } = Input;

export default function SiteSearch() {
  return (
    <div className="bg-white border-b border-gray-300 flex justify-center items-center">
      <div className="w-[1080px] flex">
        <div className="h-[88px] leading-[88px] text-4xl font-bold text-blue-500 ml-4">
          MMALL
        </div>
        <Search
          className="w-[750px] mt-[24px] ml-4"
          placeholder="请输入商品名称"
          allowClear
          enterButton="搜索"
          size="large"
        />
      </div>
    </div>
  );
}
