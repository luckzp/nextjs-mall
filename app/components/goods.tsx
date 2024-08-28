"use client";
import React from "react";

export default function Goods() {
  const goods = [
    {
      title: "F1 家用电器",
      names: ["双开门冰箱", "电视", "洗衣机", "空调"],
    },
    {
      title: "F2 数码3C",
      names: ["笔记本电脑", "手机", "平板电脑", "数码相机"],
    },
    {
      title: "F3 服装箱包",
      names: ["女装", "帽子专区", "旅行箱", "手提包"],
    },
    {
      title: "F4 食品生鲜",
      names: ["最爱零食", "生鲜", "半成品菜", "速冻专区"],
    },
    {
      title: "F5 酒水饮料",
      names: ["白酒", "红酒", "饮料", "调制鸡尾酒"],
    },
  ];
  const getColorStyle = (index: number) => {
    switch (index) {
      case 1:
        return "text-teal-500  border-teal-500";
      case 2:
        return "text-red-500 border-red-500";
      case 3:
        return "text-blue-500  border-blue-500";
      case 4:
        return "text-purple-500  border-purple-500";
      default:
        return "";
    }
  };
  return (
    <div className="w-[1080px] mx-auto">
      {goods.map((good, index) => (
        <div key={index}>
          <h1
            className={`h-[50px] leading-[50px] text-orange-400 text-[20px] border-b border-solid border-orange-400  ${getColorStyle(
              index
            )}`}
          >
            {good.title}
          </h1>
          <ul className="flex flex-wrap gap-5">
            {good.names.map((item, itemIndex) => (
              <li
                className="w-[255px] h-[260px] my-[15px] bg-white"
                key={itemIndex}
              >
                <a href="./list.html?categoryId=100006">
                  <div className="text-[16px] text-gray-500 ml-[20px] mt-[12px]">
                    {item}
                  </div>
                  <img
                    className="mx-auto mt-[10px] w-[204px] h-[195px]"
                    src="floor1-1.jpg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
