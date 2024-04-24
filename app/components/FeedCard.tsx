import React from 'react'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'

const FeedCard = () => {
  return (
    <div className='border border-r-0 border-l-0 border-b-0 border-gray-300 p-4 hover:bg-slate-600 cursor-pointer'>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-1'>
                <img src='../favicon.ico' width={50} height={50} className='rounded-full' />
            </div>
            <div className='col-span-11'>
                <div className='flex flex-col'>
                    <h5 className='font-semibold'>Elon Musk</h5>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a rem at minima architecto provident quos explicabo, tempora quis adipisci.</p>
                </div>
                <div
                    className='flex justify-between items-center mt-4 text-xl'
                    >
                    <div>
                        <BiMessageRounded className='text-gray-400' />
                    </div>
                    <div>
                        <AiOutlineRetweet className='text-gray-400' />
                    </div>
                    <div>
                        <AiOutlineHeart className='text-gray-400' />
                    </div>
                    <div>
                        <BiUpload className='text-gray-400' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedCard