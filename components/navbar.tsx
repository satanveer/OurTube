
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
    setsearch: (search: string) => void;
  }
  
  export default function Navbar({ setsearch }: NavbarProps) {
    const [inputText, setInput] = useState("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setsearch(inputText);
    }

  return (
    <div>
      <nav className="flex fixed w-full h-16">
        <ul className="flex p-3 md:px-4 w-full justify-between items-cente">
          <li className="">
            <Link href={"#"} className="text-white flex gap-1 items-center justify-start">
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
          <li className="flex justify-between">
            <form className="flex md:gap-4 md:mr-32 justify-between" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search..."
                className="md:block  border-[1.5px] border-gray-500 p-1 px-3 rounded-2xl md:w-[460px] text-white focus:outline-none w-[230px] mr-3"
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
          <li className="hidden md:block">
            <Link href={"#"}>
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

  
  


