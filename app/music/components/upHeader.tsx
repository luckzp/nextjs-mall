import React from "react";

export default function upHeader() {
  return (
    <div className="flex justify-between pb-[10px] border-b border-[#d3d3d3]">
      <div className="text-bold text-black">入驻歌手</div>
      <div className=" text-[#666]">查看全部 {">"}</div>
    </div>
  );
}
