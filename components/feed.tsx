import React from 'react'
import Link from 'next/link'


export function Feed({videos}:{videos:any}) {
    
    return (
        <div className='w-full flex flex-wrap gap-6 p-2 justify-around md:ml-56'>
            {videos && videos.map((item:any,index:any) => (

            <div className='w-full  md:w-[288px] md:h-[300px]' key={"2"}>
                    <div className='flex flex-col items-center'>
                        <Link href={item.ln} className='w-full'>
                            <div className='w-full'>
                                <img src={item.thumbnail} alt='thumbnail' className='rounded-xl contain w-full'></img>
                            </div>
                         </Link>
                            <div className='flex gap-2 pt-4 items-center justify-center'>
                            <Link href={item.ln}>
                                <div>
                                    <img src={item.creator} alt='creator' width={40} height={40} className='rounded-[1000px]'></img>
                                </div>
                            </Link>

                                <div className=''>
                                    <Link href={item.ln}>
                                        <span className='bg-transparent flex text-gray-300 text-sm'>{item.title}</span>
                                    </Link>
                                    

                                        <span className='text-gray-300 text-sm'>{item.views}</span>
                                    
                                    
                                    
                                </div>
                            </div>
                    </div>
                    
            </div>
        ))}
      </div>
)
    
}
