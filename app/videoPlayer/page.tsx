"use client";
import React from 'react';
import Player from './player';
import { useSearchParams } from 'next/navigation';
import videoStats from './videoStats';
const VideoPlayerPage = () =>{

  const searchParams= useSearchParams();
  const iframeVideo=(searchParams.get("watchVideo"))
 

  return (
    <div className='pt-20'> 
     <Player videoId={iframeVideo} ></Player>
    </div>
  );
};

export default VideoPlayerPage;
