"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  setsearch: (search: string) => void;
  toggleMenu: () => void;
}

export default function Navbar({ setsearch, toggleMenu }: NavbarProps) {
  const [inputText, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsearch(inputText);
  };

  return (
    <div className="fixed w-full navbar-blur z-50 shadow-lg">
      <nav className="flex w-full h-16">
        <ul className="flex p-3 md:px-4 w-full justify-between items-center">
          <li className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="text-white rounded-lg flex items-center justify-center w-10 h-10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-7 transition-all"></span>
                <span className="block w-6 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 group-hover:w-7 transition-all"></span>
                <span className="block w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-7 transition-all"></span>
              </div>
            </button>
            <Link
              href={"/"}
              className="text-white flex gap-2 items-center justify-start group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Image
                  src={"/images/video.png"}
                  width={48}
                  height={48}
                  alt="OurTube"
                  className="ml-3 relative z-10 drop-shadow-lg"
                />
              </div>
              <span className="text-2xl font-bold gradient-text hidden md:block">OurTube</span>
            </Link>
          </li>
          <li className="flex justify-between items-center flex-shrink-0">
            <form
              className="flex md:gap-4 justify-between items-center"
              onSubmit={handleSubmit}
            >
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="glass-effect border border-white/10 p-2.5 px-4 rounded-full md:w-[460px] w-[180px] text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-all duration-300 mr-3"
                  onChange={(e) => setInput(e.target.value)}
                  value={inputText}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <button 
                type="submit" 
                className="glass-effect p-2 rounded-full hover:bg-white/10 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </li>
          <li className="flex items-center gap-4 flex-shrink-0">
            <Link href={"#"} className="hidden md:block group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <Image
                  src={"/images/user.png"}
                  width={40}
                  height={40}
                  alt="Profile"
                  className="relative z-10 border-2 border-cyan-400/50 rounded-full hover:border-pink-500/50 transition-colors"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
