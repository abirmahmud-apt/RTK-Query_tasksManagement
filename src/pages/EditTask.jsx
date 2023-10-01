import { Button, MenuItem, TextField } from '@mui/material'
import React from 'react'

export default function EditTask() {
  return (
    <div className='flex items-center justify-center' style={{height:"calc(100vh - 64px)"}}>
        <form className='w-5/12'>
            <h2 className='text-center text-4xl font-bold text-gray-700 my-8'>Edit Task for Your Team</h2>
            {/* TASK NAME */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Task Name:</h1>
                <TextField
                    required
                    size="small"
                    id="outlined-start-adornment"
                    placeholder='Task Name'
                    sx={{ m: 1, width: '40ch'}}
                />
            </div>

            {/* Assign To */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Assign To:</h1>
                <TextField
                    required
                    id="outlined-select-currency"
                    label='Assign To'
                    select
                    sx={{ m: 1, width: '40ch' }}
                    size='small'
                >
                    <MenuItem value={'pending'}>Pending</MenuItem>
                    <MenuItem value={'process'}>Process</MenuItem>
                    <MenuItem value={'completed'}>Completed</MenuItem>
                </TextField>
            </div>


            {/* Project Name */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Project Name:</h1>
                <TextField
                    required
                    id="outlined-select-currency"
                    label='Project Name'
                    select
                    sx={{ m: 1, width: '40ch' }}
                    size='small'
                >
                    <MenuItem value={'pending'}>Pending</MenuItem>
                    <MenuItem value={'process'}>Process</MenuItem>
                    <MenuItem value={'completed'}>Completed</MenuItem>
                </TextField>
            </div>

            {/* Deadline */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Deadline:</h1>
                <TextField
                    required
                    size="small"
                    id="outlined-start-adornment"
                    type='date'
                    sx={{ m: 1, width: '40ch'}}
                />
            </div>
            <div className='text-end my-3'>
                <Button sx={{width: '30ch'}} type='submit' variant='contained'>Save</Button>
            </div>
        </form>
    </div>
  )
}
