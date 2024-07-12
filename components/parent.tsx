import { useState } from "react";
import React from "react";
import  Navbar  from "./navbar";
import Feed from "./feed";
import SideMenu from "./sidemenu";
import Recommendation from "./Recommendation";
export default function Parent(){
    const [search, setsearch] = useState("")
    const [searchSide , setSearchside] = useState("")
    const [recommend,setRecommend]= useState("");
    return(
        <div>
            <SideMenu setSearchside={setSearchside}></SideMenu>
            <div>
                <Navbar setsearch={setsearch}></Navbar>
                <Recommendation setRecommend={setRecommend}></Recommendation>
                <Feed search={search} side={searchSide} recommendationmenu={recommend}></Feed>
            </div>
            
        </div>
    );
}