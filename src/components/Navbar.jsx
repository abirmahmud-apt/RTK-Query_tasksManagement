import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment,TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar({search, setSearch}) {
  return (
    <div className='h-16  w-11/12 m-auto flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-slate-700'>APT<span className='text-violet-500'>_MEUS</span></Link>

        <div>
            <TextField
                value={search}
                onChange={e => setSearch(e.target.value)}
                size="small"
                id="outlined-start-adornment"
                placeholder='SEARCH'
                sx={{ m: 1, width: '30ch'}}
                
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
            />
        </div>
    </div>
  )
}
