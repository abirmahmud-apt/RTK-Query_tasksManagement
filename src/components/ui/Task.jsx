import React from 'react'
import Member from './Member'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Button, MenuItem, TextField } from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Task() {
  return (
    <div className='border rounded flex justify-between items-center h-16 my-3 mr-2'>
        <div className='flex gap-3 items-center'>

            <div className='bg-slate-400 h-16 rounded-l w-14 text-xl text-white flex items-center px-2 text-center font-bold'>{moment("2023-10-05", "YYYYMMDD").fromNow()}</div>

            <div className='text-lg font-semibold'>Last over need 15 runs</div>
            <div className='text-sm border border-violet-500 px-2 rounded-full text-violet-500'>Scoreboard</div>
        </div>
        <div className='flex gap-1 items-center'>
            <Member/>
            
            <Link to={`/edit/1`}><Button><DriveFileRenameOutlineIcon/></Button></Link>

            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                // defaultValue="hello"
                sx={{ m: 1, width: '15ch' }}
                size='small'
            >
                <MenuItem value={'pending'}>Pending</MenuItem>
                <MenuItem value={'process'}>Process</MenuItem>
                <MenuItem value={'completed'}>Completed</MenuItem>
            </TextField>
        </div>
    </div>
  )
}
