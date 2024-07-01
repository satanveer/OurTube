"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchVideos } from '@/components/youtubeApi';
import search from './navbar';
import moment from 'moment'
import valueConverters from '@/components/valueConverter';
import shortenTitle from '@/components/titleConverter';


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
    <div className='w-full flex flex-wrap gap-[15.5px] p-2 justify-around md:pl-56'>
      {videos.map((video:any, index:any) => (
        <div className='w-full md:w-[288px] md:h-[300px] mt-3' key={index}>
          <div className='flex flex-col items-center h-full'>
            <Link href={`https://youtube.com/watch?v=${video.id}`} className='w-full'>
              <div className='w-full'>
                <img 
                  src={video.thumbnail}
                  alt='thumbnail'
                  className='rounded-xl contain w-full h-[220px] object-cover'
                />
              </div>
            </Link>
            <div className='flex gap-2 pt-4 items-start w-full h-full'>
              <div>
                <img
                  src={video.thumbnail} 
                  alt='creator'
                  width={40}
                  height={50}
                  className='rounded-full object-cover w-[50px] h-[35px]'
                />
              </div>
              <div className='flex flex-col'>
                <Link href={`https://youtube.com/watch?v=${video.id}`}>
                  <span className='bg-transparent flex text-gray-300 text-m font-semibold'>{shortenTitle(video.title)}</span>
                </Link>
                <span className='text-gray-300 text-[12px]'>{video.channelName}</span>
                <div className='flex gap-x-2'>
                    <span className='text-gray-300 text-[12px]'>{valueConverters(video.views)} views</span>
                    <span className='text-gray-300 text-[12px]'>{moment(video.publishedAt).fromNow()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vids;
