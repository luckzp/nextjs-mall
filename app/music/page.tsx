"use client";
import React from "react";
import TopNav from "./components/topNav";
import TopBanner from "./components/topBanner";
import Main from "./components/main";
export default function Music() {
  return (
    <div className="text-[12px]">
      <TopNav />
      <TopBanner />
      <Main />
    </div>
  );
}
