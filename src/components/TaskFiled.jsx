import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Task from './ui/Task';
import { Link } from 'react-router-dom';

export default function TaskFiled() {
  return (
    <div>
      <Link to={'/add'}><Button variant='outlined'><AddIcon/> Add New</Button></Link>

      <div id='scrollbar' className='mt-5 overflow-auto ' style={{height: "calc(100vh - 122px)"}}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        
      </div>
    </div>
  )
}
