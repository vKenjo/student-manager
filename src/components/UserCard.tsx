import React from 'react'
import Image from 'next/image'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
        <div className='flex justify-between items-center'>
            <span className='text-[10px] px-2 py-1 bg-white items-center rounded-full text-green-600'>2025/26</span>
            <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h1 className='test-2xl font-semibold my-4'>1,234</h1>
        <h2 className='capitalize test-sm font-medium text-gray-500'>{type}</h2>
    </div>
  )
}

export default UserCard