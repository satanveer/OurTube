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
            { suggestion: 'comedy', ln: '#' },
            { suggestion: 'podcasts', ln: '#' },
            { suggestion: 'live', ln: '#' },
            { suggestion: 'trending', ln: '#' },
            { suggestion: 'health', ln: '#' },
            { suggestion: 'fitness', ln: '#' },
            { suggestion: 'beauty', ln: '#' },
            { suggestion: 'cooking', ln: '#' },
            { suggestion: 'diy', ln: '#' },
            { suggestion: 'art', ln: '#' },
            { suggestion: 'animation', ln: '#' },
            { suggestion: 'education', ln: '#' },
            { suggestion: 'documentary', ln: '#' },
            { suggestion: 'vlogs', ln: '#' },
            { suggestion: 'reviews', ln: '#' },
        ];
        
    return (
        <div className='w-full overflow-hidden pb-3 relative'>
        <div className='flex gap-3 px-3 md:px-5 pt-4 overflow-x-auto scrollbar-hide scroll-smooth'>
            {recommendation &&
                recommendation.map((item: any, index: any) => (
                    <div key={index} className="flex-shrink-0" style={{ animationDelay: `${index * 0.05}s` }}>
                        <button 
                            className='recommendation-btn glass-effect text-white px-5 py-2.5 rounded-full hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-pink-500/20 border border-white/10 font-medium text-sm whitespace-nowrap shadow-lg' 
                            onClick={() => handle(item.suggestion)}
                        >
                            <span className="relative z-10 capitalize">{item.suggestion}</span>
                        </button>
                    </div>
                ))}
        </div>
        </div>
    )
}
