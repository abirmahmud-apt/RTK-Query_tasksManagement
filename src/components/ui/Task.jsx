import React, { useEffect, useState } from 'react'
import Member from './Member'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Button, MenuItem, TextField } from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteTaskMutation, useEditTaskMutation } from '../../features/task/taskApi';

export default function Task({task}) {
    const [status, setStatus] = useState(task.status ? task.status : 'Pending')
    const [editTask] = useEditTaskMutation()
    const [deleteTask] = useDeleteTaskMutation()

    let color;
    if(task?.project?.projectName === 'Scoreboard') color = 'rgb(25, 118, 210)'
    if(task?.project?.projectName === 'Flight Booking') color = 'rgb(156, 39, 176)'
    if(task?.project?.projectName === 'Product Cart') color = 'rgb(211, 47, 47)'
    if(task?.project?.projectName === 'Book Store') color = 'rgb(2, 136, 209)'
    if(task?.project?.projectName === 'Blog Application') color = 'rgb(46, 125, 50)'
    if(task?.project?.projectName === 'Job Finder') color =  'rgb(237, 108, 2)'

    // useEffect(() => {
    //     if(status !== ''){
    //        
    //     }
    // }, [status, task, editTask])

    const handleStatus =() =>{
        if(task?.status !== status){
            editTask({
                    id:task?.id,
                    data: {
                        ...task,
                        status
                    }
                })
        }
    }

    const handleDelete = () =>{
        deleteTask(task.id)
    }
  return (
    <div className='border rounded flex justify-between items-center h-16 my-3 mr-2' style={{borderColor: color}}>
        <div className='flex gap-3 items-center'>

            <div className='h-16 rounded-l text-white flex items-center justify-center text-center font-bold' style={{width:'100px', background: color}}>{moment(task?.deadline, "YYYYMMDD").fromNow()}</div>

            <div className='text-lg font-semibold'>{task?.taskName}</div>

            <div className='text-sm border px-2 rounded-full' style={{borderColor:color, color: color}}>{task?.project?.projectName}</div>
        </div>
        <div className='flex gap-1 items-center'>
            <Member info={task?.teamMember}/>
            
            {status !== 'completed' && <Link to={`/edit/${task.id}`}><Button sx={{color: color}}><DriveFileRenameOutlineIcon/></Button></Link>}
            {status === 'completed' && <Button onClick={handleDelete} sx={{color: color}}><DeleteIcon/></Button>}

            <TextField
                id="outlined-select-currency"
                select
                defaultValue={task.status ? task.status : 'pending'}
                // value={status}
                onChange={e => setStatus(e.target.value)}
                onFocus={handleStatus}
                onBlur={handleStatus}
                sx={{ m: 1, width: '15ch'}}
                size='small'
            >
                <MenuItem  value={'pending'}>Pending</MenuItem>
                <MenuItem  value={'process'}>Process</MenuItem>
                <MenuItem  value={'completed'}>Completed</MenuItem>
            </TextField>
        </div>
    </div>
  )
}
