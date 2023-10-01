import { Avatar } from '@mui/material'
import React from 'react'

export default function Member() {
  return (
    <div className='flex items-center gap-2 ml-2 my-2'>
        <Avatar 
        alt="Remy Sharp" 
        sx={{ width: 35, height: 35 }}
        src={'https://tse3.mm.bing.net/th?id=OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH&pid=Api&P=0&h=220'} />

        <h2 className='font-semibold text-gray-600'>Abir Mahmud</h2>
    </div>
  )
}
