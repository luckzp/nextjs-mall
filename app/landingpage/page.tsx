import React, { useState } from "react";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Footer from "./components/footer";
import LeftDetail from "./components/leftDetail";
import RightDetail from "./components/rightDetail";
export default function page() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <LeftDetail></LeftDetail>
      <RightDetail></RightDetail>
      <Feature></Feature>

      <Footer></Footer>
    </div>
  );
}
