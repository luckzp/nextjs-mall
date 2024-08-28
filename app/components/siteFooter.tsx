import React from "react";

export default function SiteFooter() {
  return (
    <div className="w-[1080px] mx-auto flex flex-col items-center justify-center text-gray-400">
      <div>
        <a className="px-[10px]" href="https://www.bilibili.com" target="blank">
          B站
        </a>
        |
        <a className="px-[10px]" href="https://www.baidu.com" target="blank">
          百度
        </a>
        |
        <a className="px-[10px]" href="https://www.taobao.com" target="blank">
          淘宝
        </a>
      </div>
      <div>© 2015-2020 mmall.cn — All Rights Reserved.</div>
    </div>
  );
}
