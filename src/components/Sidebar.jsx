import React from 'react'
import Projects from './Projects'
import TeamMembers from './TeamMembers'
import './ui/scrollBar.css'

export default function Sidebar() {
  return (
    <div id='scrollbar' className='overflow-y-auto scroll-smooth' style={{maxHeight:'calc(100vh - 65px)'}}>
      <Projects/>
      <TeamMembers/>
    </div>
  )
}
