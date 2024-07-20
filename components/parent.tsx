import { useState } from "react";
import React from "react";
import Navbar from "./navbar";
import Feed from "./feed";
import SideMenu from "./sidemenu";
import Recommendation from "./Recommendation";

export default function Parent() {
  const [search, setSearch] = useState("");
  const [searchSide, setSearchside] = useState("");
  const [recommend, setRecommend] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-full">
      <Navbar setsearch={setSearch} toggleMenu={toggleMenu} />
      <div className="flex">
        <SideMenu
          setSearchside={setSearchside}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
        <div
          className={`flex-1 transition-all duration-300 ${
            isMenuOpen ? "md:ml-[190px]" : "md:ml-0"
          }`}
        >
          <div className="mt-20">
            <Recommendation setRecommend={setRecommend} />
          </div>
          <Feed
            search={search}
            side={searchSide}
            recommendationmenu={recommend}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>
    </div>
  );
}
