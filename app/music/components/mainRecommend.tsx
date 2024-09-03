import React from "react";

export default function mainRecommend() {
  return (
    <div className="w-[140px] h-[170px]">
      <div className="w-[140px] h-[140px] relative">
        <img src="/sunflower.jpg"></img>
        <a className="absolute top-0 left-0 right-0 bottom-0 bg-[url('/coverall.png')] z-3"></a>
        <div className="absolute flex left-0 bottom-0 h-[27px] leading-[27px] w-full bg-[url('/coverall.png')] bg-[0_-537px] z-4">
          <div className="w-[14px] h-[11px] my-[9px] ml-[10px] mr-[6px] bg-[url('/iconall.png')] bg-[0_-24px]"></div>
          <div className="text-slate-200">3007万</div>
        </div>
        <div className="absolute bottom-[5px] right-[10px] bg-[url('/iconall.png')] w-[16px] h-[17px] z-5"></div>
      </div>
      <div className="mt-1 text-[14px]">
        <span className="inline-block relative top-[3px]  w-[35px] h-[15px] bg-[url('/icon.png')] bg-[-31px_-658px] mr-1"></span>
        <span>古典清香 I 我的茶馆里住着巴赫与肖邦</span>
      </div>
    </div>
  );
}
