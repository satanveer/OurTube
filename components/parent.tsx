import { useState } from "react";
import React from "react";
import  Navbar  from "./navbar";
import Feed from "./feed";
import SideMenu from "./sidemenu";
export default function Parent(){
    const [search, setsearch] = useState("")
    const [searchSide , setSearchside] = useState("")
    return(
        <div>
            <SideMenu setSearchside={setSearchside}></SideMenu>
            <div>
                <Navbar setsearch={setsearch}></Navbar>
                <Feed search={search} side={searchSide}></Feed>
            </div>
            
        </div>
    );
}