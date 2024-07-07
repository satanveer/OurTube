"use client"
import { fetchVideos } from "./youtubeApi";
import  Feed  from "./feed";
import React, { useEffect, useState } from "react";

function Vids({ text }: any) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const loadVideos = async () => {
                    const videoData = await fetchVideos(text);   
                    setVideos(videoData);  
        };

        loadVideos();
    }, [text]);

    useEffect(() => {
    }, [videos]);
    return <Feed videos={videos} />;


}

export default Vids;
