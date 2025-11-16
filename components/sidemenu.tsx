"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SideMenu({
  setSearchside,
  isMenuOpen,
  toggleMenu,
}: {
  setSearchside: (value: string) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  const menuItems = [
    { name: "Home", icon: "/images/home.png", ln: "#" },
    { name: "Sports", icon: "/images/gaming.png", ln: "#" },
    { name: "Entertainment", icon: "/images/movie.png", ln: "#" },
    { name: "News", icon: "/images/news.png", ln: "#" },
    { name: "Music", icon: "/images/music.png", ln: "#" },
    { name: "Movies", icon: "/images/movie.png", ln: "#" },
    { name: "TV Shows", icon: "/images/social.png", ln: "#" },
    { name: "Live", icon: "/images/live.png", ln: "#" },
    { name: "Gaming", icon: "/images/gaming.png", ln: "#" },
    { name: "Technology", icon: "/images/tech.png", ln: "#" },
    { name: "Education", icon: "/images/education.png", ln: "#" },
    { name: "Fashion", icon: "/images/fashion.png", ln: "#" },
    { name: "Health", icon: "/images/health.png", ln: "#" },
    { name: "Travel", icon: "/images/travel.png", ln: "#" },
    { name: "Food", icon: "/images/clock.png", ln: "#" },
    { name: "Comedy", icon: "/images/funny.png", ln: "#" },
    { name: "Podcasts", icon: "/images/podcast.png", ln: "#" },
    { name: "Subscriptions", icon: "/images/subscribe.png", ln: "#" },
    { name: "History", icon: "/images/history.png", ln: "#" },
    { name: "Liked Videos", icon: "/images/social.png", ln: "#" },
    { name: "Watch Later", icon: "/images/clock.png", ln: "#" },
    { name: "Learning", icon: "/images/learning.png", ln: "#" },
    { name: "Spotlight", icon: "/images/spotlight.png", ln: "#" },
    { name: "360", icon: "/images/360.png", ln: "#" },
    { name: "Browse Channels", icon: "/images/browse.png", ln: "#" },
    { name: "More", icon: "/images/more.png", ln: "#" },
  ];

  const handleClick = (name: string) => {
    setSearchside(name);
  };

  const displayedItems = isMenuOpen ? menuItems : menuItems.slice(0, 11);

  return (
    <div
      className={`fixed top-0 left-0 h-full transition-all duration-300 transform ${
        isMenuOpen ? "translate-x-0 w-[220px]" : "-translate-x-full w-0"
      } ${isMenuOpen?"md:w-[220px]":"md:w-[80px]"} navbar-blur text-white overflow-hidden z-40 md:translate-x-0 md:fixed md:top-0 md:left-0 border-r border-white/10`}
    >
      <div className={`h-full ${isMenuOpen ? "block" : "hidden"} md:block pt-16`}>
        <div className="scrollableSidebar w-full px-2">
          {displayedItems.map((item, index) => (
            <div className="w-full" key={index}>
              <nav className="text-gray-400">
                <ul className="flex flex-col pt-2">
                  <button
                    className="flex items-center group"
                    onClick={() => handleClick(item.name)}
                  >
                    <div
                      className={`flex items-center w-full glass-effect hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-pink-500/10 rounded-xl px-3 py-3 gap-3 transition-all duration-300 ${
                        isMenuOpen ? "" : "justify-center"
                      } border border-transparent hover:border-cyan-400/20`}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        <Image
                          src={item.icon}
                          alt=""
                          width={isMenuOpen ? 22 : 28}
                          height={isMenuOpen ? 22 : 28}
                          className="relative z-10 group-hover:scale-110 transition-transform"
                        />
                      </div>
                      {isMenuOpen && (
                        <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </span>
                      )}
                    </div>
                  </button>
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
