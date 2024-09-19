"use client";

import Banner from "./components/banner";
import Goods from "./components/goods";
import SiteNavigation from "./components/siteNavigation";
import SiteSearch from "./components/siteSearch";
import SiteFooter from "./components/siteFooter";
export default function Home() {
  return (
    <main className="bg-[#f6f6f6]">
      <SiteNavigation />

      <SiteSearch />

      <Banner />
      <Goods />
      <SiteFooter />
    </main>
  );
}
