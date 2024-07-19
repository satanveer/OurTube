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

  const displayedItems = isMenuOpen ? menuItems : menuItems.slice(0, 8);

  return (
    <div
      className={`fixed top-16 left-0 h-full transition-all duration-300 ${
        isMenuOpen ? "w-[190px]" : "w-[70px]"
      } bg-gray-900 text-white overflow-hidden z-40`}
    >
      <button
        onClick={toggleMenu}
        className="fixed z-50 bg-pink-600 text-white rounded mt-4 flex items-center justify-center w-10 h-10 md:ml-1"
      >
        <img
          src="/images/hamburgerMenu.png"
          alt="Menu"
          className="w-6 h-6"
        />
      </button>
      <div
        className={`h-full ${
          isMenuOpen ? "block" : "flex flex-col items-center mt-12"
        }`}
      >
        <div className="scrollableSidebar w-full">
          {displayedItems.map((item, index) => (
            <div className="pl-3 w-full" key={index}>
              <nav className="text-gray-400">
                <ul className="flex flex-col pt-7 mr-4">
                  <button
                    className="flex items-center"
                    onClick={() => handleClick(item.name)}
                  >
                    <Link
                      href={item.ln}
                      className={`flex items-center hover:bg-gray-600 hover:rounded-2xl px-2 py-2 gap-2 hover:transition ease-in-out delay-10 ${
                        isMenuOpen ? "" : "justify-center"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={isMenuOpen ? 25 : 40}
                        height={isMenuOpen ? 25 : 40}
                        className="bg-transparent"
                      />
                      {isMenuOpen && (
                        <span className="bg-transparent text-base">
                          {item.name}
                        </span>
                      )}
                    </Link>
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
