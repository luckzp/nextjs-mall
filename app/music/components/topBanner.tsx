import React from "react";

export default function TopBanner() {
  return (
    <div className="bg-[url('/background_bg.jpg')] bg-center bg-[length:6000px]">
      <div className="relative w-[982px] h-[285px] mx-auto flex">
        <div className="relative overflow-hidden w-[730px]">
          <ul className="flex">
            <li className="flex-shrink-0 w-[100%]">
              <a>
                <img className=" h-[285px]" src="/topBanner.jpg"></img>
              </a>
            </li>
            <li>
              <a>
                <img className="h-[285px]" src="/topBanner.jpg"></img>
              </a>
            </li>
            <li className="flex-shrink-0 ">
              <a>
                <img className="h-[285px]" src="/topBanner.jpg"></img>
              </a>
            </li>
            <li className="flex-shrink-0 ">
              <a>
                <img className=" h-[285px]" src="/topBanner.jpg"></img>
              </a>
            </li>
          </ul>
          <div className="absolute bottom-0  w-[100%] ">
            <ul className="flex justify-center">
              {[...Array(10)].map((_, index) => (
                <li key={index}>
                  <a className="inline-block w-[20px] h-[20px] bg-[url('/banner.png')] bg-[3px_-343px]"></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[254px] h-[285px] bg-[url('/download.png')] z-0">
          <a className="block w-[215px] h-[56px] mt-[186px] ml-[19px] hover:bg-[url('/download.png')] hover:bg-[0_-289px]"></a>
          <div className="text-[#8d8d8d] text-center my-[10px]">
            PC 安卓 iPhone WP iPad Mac 六大客户端
          </div>
        </div>
        <div className="absolute left-[-68px] top-0 bottom-0 my-auto w-[37px] h-[63px] bg-[url('/banner.png')] bg-[0_-360px] hover:bg-[0_-430px]"></div>
        <div className="absolute right-[-68px] top-0 bottom-0 my-auto w-[37px] h-[63px] bg-[url('/banner.png')] bg-[0_-508px] hover:bg-[0_-578px]"></div>
      </div>
    </div>
  );
}
