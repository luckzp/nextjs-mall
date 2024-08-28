"use client";
import React from "react";
import { Carousel } from "antd";

export default function Banner() {
  const categories = [
    ["手机", "数码"],
    ["电脑", "办公配件"],
    ["电视", "空调", "冰箱", "洗衣机"],
    ["厨卫家电", "小家电"],
    ["家具", "家装"],
    ["厨卫家电", "小家电"],
    ["个护化妆", "清洁用品", "纸品"],
    ["母婴用品", "儿童玩具", "童装童鞋"],
    ["鞋靴", "箱包", "钟表", "珠宝"],
    ["图书", "音像", "电子书"],
  ];

  return (
    <div className="w-[1080px] h-[350px] flex mx-auto">
      <ul className="w-[220px] px-[10px] mr-[10px] bg-gray-400 text-white">
        {categories.map((itmes, index) => (
          <li
            key={index}
            className="pl-[10px] h-[35px] hover:bg-gray-400 text-[14px] leading-[35px]"
          >
            {itmes.map((item, indexItem) => {
              return (
                <a key={indexItem} className="mr-[6px] hover:text-red-600">
                  {item}
                </a>
              );
            })}
          </li>
        ))}
      </ul>
      <Carousel className="w-[850px]" autoplay>
        <div>
          <img src="banner1.jpg" className="w-[850px] h-[350px]" />
        </div>
        <div>
          <img src="banner2.jpg" className="w-[850px] h-[350px]" />
        </div>
        <div>
          <img src="banner3.jpg" className="w-[850px] h-[350px]" />
        </div>
      </Carousel>
    </div>
  );
}
