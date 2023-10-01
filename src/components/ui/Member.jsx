import { Avatar } from '@mui/material'
import React from 'react'
export default function Member({info}) {
  const img = info?.avatar
  return (
    <div className='flex items-center gap-2 ml-2 my-2'>
        <Avatar 
        alt={info?.name} 
        sx={{ width: 35, height: 35 }}
        src={img} />

        <h2 className='font-semibold text-gray-600'>{info?.name}</h2>
    </div>
  )
}
