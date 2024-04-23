import React from 'react'
import Link from 'next/link'


export function Feed({videos}:{videos:any}) {
    
    return (
        <div className='w-full flex flex-wrap gap-6 p-5 justify-around md:ml-56'>
            {videos && videos.map((item:any,index:any) => (

            <div className='w-[288px] h-[300px]'>
                <Link href={item.ln}>
                    <div className='flex flex-col'>
                            <div className=''>
                                <img src={item.thumbnail} alt='thumbnail' width={288} height={192}className='rounded-xl'></img>
                            </div>
                            <div className='flex gap-2 pt-4 '>
                                <div>
                                    <img src={item.creator} alt='creator' width={40} height={40} className='rounded-[1000px]'></img>
                                </div>

                                <div>
                                    <span className='bg-transparent flex text-gray-300 text-sm'>{item.title}</span>
                                    <span className='text-gray-300 text-sm'>{item.views}</span>
                                </div>
                            </div>
                    </div>
                    
            </Link>
            </div>
        ))}
      </div>
)
    
}
