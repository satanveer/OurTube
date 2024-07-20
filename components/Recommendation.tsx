import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

export default function Recommendation({ setRecommend }: { setRecommend: (value: string) => void }) {
    const handle = (suggestion: string) => {
        setRecommend(suggestion);
    };
        const recommendation = [
            { suggestion: 'sports', ln: '#' },
            { suggestion: 'music', ln: '#' },
            { suggestion: 'news', ln: '#' },
            { suggestion: 'gaming', ln: '#' },
            { suggestion: 'fashion', ln: '#' },
            { suggestion: 'learning', ln: '#' },
            { suggestion: 'spotlight', ln: '#' },
            { suggestion: '360', ln: '#' },
            { suggestion: 'travel', ln: '#' },
            { suggestion: 'food', ln: '#' },
            { suggestion: 'movies', ln: '#' },
            { suggestion: 'technology', ln: '#' },
            { suggestion: 'science', ln: '#' },
            { suggestion: 'movies', ln: '#' },
            { suggestion: 'technology', ln: '#' },
            { suggestion: 'science', ln: '#' },
            { suggestion: 'more', ln: '#' },
        ];
        
    return (
        <div className='hidden md:block xl:block overflow-x-clip'>
        <div className='flex gap-5 md:w-[288px] md:pl-20 pt-26'>
            {recommendation &&
                recommendation.map((item: any, index: any) => (
                    <ul className='flex' key={1}>
                        <Link href={item.ln} className=''>
                        <li className=''>
                            <button className='text-white bg-gray-500 p-[6px] bg-opacity-50 rounded-xl hover:bg-opacity-80 hover:transition-all delay-50' onClick={() => handle(item.suggestion)}>{item.suggestion}</button>
                        </li>
                        </Link>
                    </ul>
                ))}
        </div>
        </div>
    )
}
