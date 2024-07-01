import React from 'react'
import Link from 'next/link';


export default function Recommendation() {
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
            { suggestion: 'more', ln: '#' },
        ];
        
    return (
        <div className='hidden md:block xl:block'>
        <div className='flex gap-5 md:w-[288px] md:pl-64 pb-3'>
            {recommendation &&
                recommendation.map((item: any, index: any) => (
                    <ul className='flex' key={1}>
                        <Link href={item.ln} className=''>
                        <li className=''>
                            <span className='text-white bg-gray-500 p-[6px] bg-opacity-50 rounded-xl hover:bg-opacity-80 hover:transition-all delay-50'>{item.suggestion}</span>
                        </li>
                        </Link>
                    </ul>
                ))}
        </div>
        </div>
    )
}
