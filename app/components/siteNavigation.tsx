"use client";
import React from "react";
import { HomeTwoTone, ShoppingTwoTone } from "@ant-design/icons";

export default function SiteNavigation() {
  return (
    <nav className=" flex justify-center items-center">
      <div className="w-[1080px] h-[30px] flex justify-between text-sm	">
        <div className="flex justify-start  items-center gap-3">
          <HomeTwoTone style={{ fontSize: "16px" }} />
          <div className="text-gray-600 cursor-pointer hover:text-blue-500">
            登录
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-blue-500">
            注册
          </div>
        </div>
        <div className="flex justify-end items-center gap-3">
          <ShoppingTwoTone style={{ fontSize: "18px" }} />
          <div className="text-gray-600 cursor-pointer hover:text-blue-500">
            个人中心
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-blue-500">
            我的订单
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-blue-500">
            修改密码
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-blue-500">
            关于MMall
          </div>
        </div>
      </div>
    </nav>
  );
}
