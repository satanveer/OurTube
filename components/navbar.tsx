import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ourtube from "@/public/images/video.png"


export default function Navbar(){
    return (
        <main>
           <nav className="flex fixed w-full h-16">
            <ul className="grid p-3 px-4 w-full grid-cols-3">
                <li className="">
                    <Link href={'#'} className="text-white flex items-center gap-1"
                    ><div><Image src={'/images/video.png'} width={48} height={48} alt="OurTube" className='ml-3'></Image></div>
                    <span className="text-xl">OurTube</span></Link>
                </li>
                <li className="">
                    <form action="" className="flex items-center gap-4">
                        <input type="text" placeholder="Search..." className="md:block hidden border-2 border-gray-300 p-1 px-3 rounded-2xl w-96 text-white focus:outline-none"></input>
                        <button className=""><Image src={'/images/search.png'} alt="Search" height={32} width={32}></Image></button>
                    </form>
                </li>
                <li className="flex justify-end">
                    <Link href={'#'}><Image src={'/images/user.png'} width={32} height={32}alt="Profile"></Image></Link>
                </li>
                ``
            </ul>
           </nav>
        </main>
    )
}