"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Feed from "./feed";

export default function SideMenu(setSearchside:any) {
    const menuItems = [
        {'name': 'Home', 'icon': '/images/home.png', 'ln': '#'},
        {'name': 'Sports', 'icon': '/images/gaming.png', 'ln': '#'},
        {'name': 'Entertainment', 'icon': '/images/movie.png', 'ln': '#'},
        {'name': 'News', 'icon': '/images/news.png', 'ln': '#'},
        {'name': 'Music', 'icon': '/images/music.png', 'ln': '#'},
        {'name': 'Movies', 'icon': '/images/movie.png', 'ln': '#'},
        {'name': 'TV Shows', 'icon': '/images/social.png', 'ln': '#'},
        {'name': 'Live', 'icon': '/images/live.png', 'ln': '#'},
        {'name': 'Gaming', 'icon': '/images/gaming.png', 'ln': '#'},
        {'name': 'Technology', 'icon': '/images/tech.png', 'ln': '#'},
        {'name': 'Education', 'icon': '/images/education.png', 'ln': '#'},
        {'name': 'Fashion', 'icon': '/images/fashion.png', 'ln': '#'},
        {'name': 'Health', 'icon': '/images/health.png', 'ln': '#'},
        {'name': 'Travel', 'icon': '/images/travel.png', 'ln': '#'},
        {'name': 'Food', 'icon': '/images/clock.png', 'ln': '#'},
        {'name': 'Comedy', 'icon': '/images/funny.png', 'ln': '#'},
        {'name': 'Podcasts', 'icon': '/images/podcast.png', 'ln': '#'},
        {'name': 'Subscriptions', 'icon': '/images/subscribe.png', 'ln': '#'},
        {'name': 'History', 'icon': '/images/history.png', 'ln': '#'},
        {'name': 'Liked Videos', 'icon': '/images/social.png', 'ln': '#'},
        {'name': 'Watch Later', 'icon': '/images/clock.png', 'ln': '#'},
        {'name': 'Learning', 'icon': '/images/learning.png', 'ln': '#'},
        {'name': 'Spotlight', 'icon': '/images/spotlight.png', 'ln': '#'},
        {'name': '360', 'icon': '/images/360.png', 'ln': '#'},
        {'name': 'Browse Channels', 'icon': '/images/browse.png', 'ln': '#'},
        {'name': 'More', 'icon': '/images/more.png', 'ln': '#'}
    ];
    

    const [selectedText, setSelectedText] = useState("");

    const handleClick = (name: string) => {
        setSelectedText(name);
        console.log(selectedText)
        setSearchside(selectedText);
    };

    return (
        <div className="w-full">
        <div className="scrollableSidebar fixed w-[190px] hidden md:block xl:block">
            {menuItems.map((item, index) => (
                
                <div className="pl-3 w-52" key={index}>
                    <nav className="text-gray-400">
                        <ul className="flex flex-col pt-7 mr-4">
                            <button className="" onClick={() => handleClick(item.name)}>
                                <Link href={item.ln} className="flex items-center hover:bg-gray-600 hover:rounded-2xl px-2 py-2 gap-2 hover:transition ease-in-out delay-10">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={25}
                                        height={25}
                                        className="bg-transparent"
                                    />
                                    <span className="bg-transparent text-base">
                                        {item.name}
                                    </span>
                                </Link>
                            </button>
                        </ul>
                    </nav>
                </div>
            ))}
            
        </div>
        
        
        </div>
        
    );
    
}

