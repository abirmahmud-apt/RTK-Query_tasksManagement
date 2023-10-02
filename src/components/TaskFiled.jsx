import { Alert, Box, Button, Skeleton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Task from './ui/Task';
import { Link } from 'react-router-dom';
import { useGetTasksQuery } from '../features/task/taskApi';
import { useSelector } from 'react-redux';

export default function TaskFiled({search}) {
  const {data: tasks, isLoading, isError} = useGetTasksQuery()
  const {project}= useSelector(state => state)

  // WHAT TO RENDER
  let content;
  if(isLoading) content = <div className=''>
    <Box sx={{ width: 'full' }}>
      <Skeleton animation="wave" sx={{ height: 60}}/>
      <Skeleton animation="wave" sx={{ height: 60}}/>
      <Skeleton animation="wave" sx={{ height: 60}}/>
    </Box>
  </div>
  if(!isLoading && isError) content = <div><Alert severity="error">There is an error</Alert></div>
  if(!isLoading && !isError && tasks?.length === 0) content = <div><Alert severity="info">No data found</Alert></div>
  if(!isLoading && !isError && tasks?.length >0) content = <>{
    tasks
    .filter(task => project.includes(task?.project?.projectName))
    .filter(t => search === "" ? t : t.taskName.toLowerCase().includes(search.toLowerCase()))
    .map(task => <Task key={task.id} task={task}/>)
  }</>
  return (
    <div>
      <Link to={'/add'}><Button variant='outlined'><AddIcon/> Add New</Button></Link>

      <div id='scrollbar' className='mt-5 overflow-auto ' style={{height: "calc(100vh - 122px)"}}>
        {content}

      </div>
    </div>
  )
}
