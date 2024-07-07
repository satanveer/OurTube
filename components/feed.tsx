"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import valueConverters from '@/components/valueConverter';
import shortenTitle from '@/components/titleConverter';
import Recommendation from './Recommendation';

export default function Feed({ videos }: any) {

  // Provide a default value for videos to avoid errors
  const videoList = videos || [];
  
  return (
    
    <div className='w-full flex flex-wrap gap-[20px] pl-52'>
      {videoList.map((video:any) => (
        <div className='w-full md:w-[288px] md:h-[300px] mt-10' key={video.id}>
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
