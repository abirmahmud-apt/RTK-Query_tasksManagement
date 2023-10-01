import React from 'react'
import Member from './ui/Member'

export default function TeamMembers() {
  return (
    <div className='mt-4'>
        <h2 className='text-xl font-bold mb-3 text-violet-700'>Team Members</h2>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
        <Member/>
    </div>
  )
}
