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
    <div className="fixed w-full bg-gray-800 z-50">
      <nav className="flex w-full h-16">
        <button
          onClick={toggleMenu}
          className="text-white rounded flex items-center justify-center w-10 h-10 hover:bg-gray-500 hover:rounded-full hover:transition-all hover:delay-50 mt-4 ml-4"
        >
          <img src="/images/hamburgerMenu.png" alt="Menu" className="w-6 h-6" />
        </button>
        <ul className="flex p-3 md:px-4 w-full justify-between items-center">
          <li className="">
            <Link
              href={"/"}
              className="text-white flex gap-1 items-center justify-start"
            >
              <div>
                <Image
                  src={"/images/video.png"}
                  width={48}
                  height={48}
                  alt="OurTube"
                  className="ml-3"
                />
              </div>
              <span className="text-2xl pt-3 hidden md:block">OurTube</span>
            </Link>
          </li>
          <li className="flex justify-between items-center">
            <form
              className="flex md:gap-4 md:mr-32 justify-between"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Search..."
                className="md:block border-[1.5px] border-gray-500 p-1 px-3 rounded-2xl md:w-[460px] text-white focus:outline-none w-[230px] mr-3"
                onChange={(e) => setInput(e.target.value)}
                value={inputText}
              />
              <button type="submit" className="">
                <Image
                  src={"/images/search.png"}
                  alt="Search"
                  height={40}
                  width={40}
                  className="flex justify-end"
                />
              </button>
            </form>
          </li>
          <li className="flex items-center gap-4">
            <Link href={"#"} className="hidden md:block">
              <Image
                src={"/images/user.png"}
                width={32}
                height={32}
                alt="Profile"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
