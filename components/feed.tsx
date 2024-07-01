"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchVideos } from '@/components/youtubeApi';
import search from './navbar';
const Vids = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      const videoData = await fetchVideos("chris bumsted"); 
      setVideos(videoData);
      
    };
    
    loadVideos();
  }, []);

  return <Feed videos={videos} />;
};

export function Feed({ videos }: { videos: any[] }) {
  return (
    <div className='w-full flex flex-wrap gap-6 p-2 justify-around md:pl-56'>
      {videos.map((video:any, index:any) => (
        <div className='w-full md:w-[288px] md:h-[300px]' key={index}>
          <div className='flex flex-col items-center'>
            <Link href={`https://youtube.com/watch?v=${video.id}`} className='w-full'>
              <div className='w-full'>
                <img
                  src={video.thumbnail}
                  alt='thumbnail'
                  className='rounded-xl contain w-full'
                />
              </div>
            </Link>
            <div className='flex gap-2 pt-4 items-start w-full'>
              <div>
                <img
                  src={video.thumbnail} 
                  alt='creator'
                  width={40}
                  height={40}
                  className='rounded-[1000px]'
                />
              </div>
              <div>
                <Link href={`https://youtube.com/watch?v=${video.id}`}>
                  <span className='bg-transparent flex text-gray-300 text-sm'>{video.title}</span>
                </Link>
                <span className='text-gray-300 text-sm'>{video.views}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vids;
