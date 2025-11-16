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
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navbar setsearch={setSearch} toggleMenu={toggleMenu} />
      <div className="flex w-full">
        <SideMenu
          setSearchside={setSearchside}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
        <div
          className={`flex-1 transition-all duration-300 w-full max-w-full overflow-hidden ${
            isMenuOpen ? "md:ml-[220px]" : "md:ml-[80px]"
          }`}
        >
          <div className="mt-16 w-full max-w-full overflow-hidden">
            <Recommendation setRecommend={setRecommend} />
          </div>
          <div className="mt-4 w-full max-w-full overflow-hidden">
            <Feed
              search={search}
              side={searchSide}
              recommendationmenu={recommend}
              isMenuOpen={isMenuOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
