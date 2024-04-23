import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function sidemenu() {
    const menuItems = [
        {'name':'Home','icon':'/images/home.png','ln':'#'},
        {'name':'Subscriptions','icon':'/images/subscribe.png','ln':'#'},
        {'name':'History','icon':'/images/clock.png','ln':'#'},
        {'name':'Liked Videos','icon':'/images/social.png','ln':'#'},
        {'name':'Watch Later','icon':'/images/clock.png','ln':'#'},
        {'name':'Education','icon':'/images/education.png','ln':'#'},
        {'name':'Gaming','icon':'/images/gaming.png','ln':'#'},
        {'name':'Movie','icon':'/images/movie.png','ln':'#'},
        {'name':'Music','icon':'/images/music.png','ln':'#'},
        {'name':'News','icon':'/images/news.png','ln':'#'},
        {'name':'Live','icon':'/images/live.png','ln':'#'},
        {'name':'Fashion','icon':'/images/fashion.png','ln':'#'},
        {'name':'Learning','icon':'/images/learning.png','ln':'#'},
        {'name':'Spotlight','icon':'/images/spotlight.png','ln':'#'},
        {'name':'360','icon':'/images/360.png','ln':'#'},
        {'name':'Browse Channels','icon':'/images/browse.png','ln':'#'},
        {'name':'More From Youtube','icon':'/images/more.png','ln':'#'},
        
    ];
  return (
    <div className="scrollableSidebar fixed w-52 hidden md:block xl:block">
        {menuItems.map((item, index) => (
            
                <div className="p-2 pl-3 w-60" key={"1"}>
                    <nav className="text-gray-400">
                        <ul className="flex flex-col pt-7">
                            <li className="hover:bg-gray-500">
                                <div className="">
                                    <Link href={item.ln} className="flex gap-2 items-center">
                                        <div>
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width={25}
                                                height={25}
                                            ></Image>
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
        ))};
        
    </div>
  );
}
  
  


