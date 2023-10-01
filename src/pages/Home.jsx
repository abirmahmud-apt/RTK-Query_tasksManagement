import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskFiled from '../components/TaskFiled'

export default function Home({search}) {
  return (
    <div>
        <div className='grid grid-cols-4 gap-5 w-11/12 m-auto'>
            <div><Sidebar/></div>
            <div className='col-span-3'><TaskFiled search={search}/></div>
        </div>
    </div>
  )
}
