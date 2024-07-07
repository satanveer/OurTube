"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Navbar(){
    
    return (
        <main>
           <nav className="flex fixed w-full h-16">
            <ul className="flex p-3 px-4 w-full justify-between items-center">
                <li className="">
                    <Link href={'#'} className="text-white flex gap-1 items-center"
                    ><div><Image src={'/images/video.png'} width={48} height={48} alt="OurTube" className='ml-3'></Image></div>
                    <span className="text-2xl pt-3 hidden md:block">OurTube</span></Link>
                </li>
                <li className="">
                    <form action="" className="flex gap-4 md:mr-32">
                        <input type="text"  placeholder="Search..." className="md:block hidden border-[1.5px] border-gray-500 p-1 px-3 rounded-2xl w-[460px] text-white focus:outline-none"></input>
                        <button className=""><Image src={'/images/search.png'} alt="Search" height={32} width={32} className="flex justify-end"></Image></button>
                    </form>
                </li>
                <li className="hidden md:block ">
                    <Link href={'#'}><Image src={'/images/user.png'} width={32} height={32}alt="Profile"></Image></Link>
                </li>
               
            </ul>
           </nav>
        </main>
    )
}
