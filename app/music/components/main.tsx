import React from "react";
import MainLeftHeader from "./mainLeftHeader";
import MainRightHeader from "./mainRightHeader";
export default function main() {
  return (
    <div className="w-[982px] min-h-[700px] mx-auto flex border-x border-[#d3d3d3]">
      <div className="w-[730px] p-[20px]">
        <MainLeftHeader />
        main-left
      </div>

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
        <div className="p-[21px] bg-white">
          <MainRightHeader leftText="推荐歌单" rightText="更多>" />
          <ul>
            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around border-[1px] border-l-0  border-solid border-[#e9e9e9] bg-[#fafafa]">
                  <div className="text-[14px] font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around border-[1px] border-l-0  border-solid border-[#e9e9e9] bg-[#fafafa]">
                  <div className="text-[14px] font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around border-[1px] border-l-0  border-solid border-[#e9e9e9] bg-[#fafafa]">
                  <div className="text-[14px] font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around border-[1px] border-l-0  border-solid border-[#e9e9e9] bg-[#fafafa]">
                  <div className="text-[14px] font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around border-[1px] border-l-0  border-solid border-[#e9e9e9] bg-[#fafafa]">
                  <div className="text-[14px] font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
          </ul>
          <a className="block w-[210px] h-[30px] leading-[30px] bg-[#e6e5e5] text-center mt-3 rounded-sm">
            申请成为网易音乐人
          </a>

          <MainRightHeader leftText="热门主播" className="mt-[20px]" />
          <ul>
            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around ">
                  <div className=" font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around ">
                  <div className=" font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>

            <li>
              <a className=" w-[210px] h-[62px] flex mt-3 ">
                <img className="block" src="/109951168490195225.jpg" alt="" />
                <div className=" flex-1 pl-[14px] py-1 flex flex-col justify-around ">
                  <div className=" font-bold">张惠妹</div>
                  <div className="text-[12px] text-[#666]">台湾歌手张惠妹</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
