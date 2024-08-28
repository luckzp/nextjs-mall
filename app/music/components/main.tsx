import React from "react";
import UpHeader from "./upHeader";
export default function main() {
  return (
    <div className="w-[982px] min-h-[700px] mx-auto flex border-x border-[#d3d3d3]">
      <div className="w-[730px]">main-left</div>
      <div className="w-[252px] border-l border-[#d3d3d3]">
        <img className="block mt-[5px]" src="/dis_vip_card.png" alt="" />
        <div className="bg-[url('/index.png')] h-[126px]">
          <div className="text-[12px] text-[#666] mt-[10px] mx-[18px]  leading-[20px] bg-transparent">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
          </div>
          <a
            href=""
            className="block text-[14px] w-[100px] h-[31px] leading-[31px] my-[15px] mx-auto text-center text-white rounded-md bg-red-500 text-shadow-[0_1px_0_#8a060b]"
          >
            用户登录
          </a>
        </div>
        <div className="p-[10px]">
          <UpHeader />
        </div>
      </div>
    </div>
  );
}
