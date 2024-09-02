import React from "react";
interface mainRightHeaderProps {
  leftText: string;
  rightText?: string;
  className?: string;
}

export default function mainRightHeader({
  leftText,
  rightText,
  className,
}: mainRightHeaderProps) {
  return (
    <div
      className={`flex justify-between pb-[10px] border-b border-[#d3d3d3] ${className}`}
    >
      <div className="text-bold text-black">{leftText}</div>
      {rightText && <div className=" text-[#666]">{rightText}</div>}
    </div>
  );
}
