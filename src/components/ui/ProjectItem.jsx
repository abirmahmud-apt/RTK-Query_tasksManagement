import { Checkbox } from '@mui/material'
import React from 'react'

export default function ProjectItem({color, message}) {
  return (
    <div className='flex gap-1 items-center'>
        <Checkbox checked color={color}/>
        <h2 className='text-lg font-semibold text-gray-800 hover:text-gray-600'>{message}</h2>
    </div>
  )
}
