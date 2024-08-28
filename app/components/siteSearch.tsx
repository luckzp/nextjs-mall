"use client";
import React from "react";
import { Input } from "antd";
const { Search } = Input;

export default function SiteSearch() {
  return (
    <div className="bg-white border-b border-gray-300 flex justify-center items-center">
      <div className="w-[1080px] flex items-center">
        <div className="h-[88px] leading-[88px] text-4xl font-bold text-blue-500 ml-4">
          MMALL
        </div>
        <Search
          className="ml-6 w-[780px] mr-20"
          placeholder="请输入商品名称"
          allowClear
          enterButton="搜索"
          size="large"
        />
      </div>
    </div>
  );
}
