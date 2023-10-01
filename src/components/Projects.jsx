import React from 'react'
import { useGetProjectsQuery } from '../features/project/projectApi'
import ProjectItem from './ui/ProjectItem'
import { Alert, CircularProgress } from '@mui/material';


export default function Projects() {
  const {data: projects, isLoading, isError, error} = useGetProjectsQuery()
  
  
  // WHAT TO RENDER
  let content;
  if(isLoading) content = <div className=''><CircularProgress color="success" /></div>
  if(!isLoading && isError) content = <div><Alert severity="error">{error?.data}</Alert></div>
  if(!isLoading && !isError && projects?.length === 0) content = <div><Alert severity="info">No data found</Alert></div>
  if(!isLoading && !isError && projects?.length > 0) content = <div>{
      projects.map(project => <ProjectItem key={project.id} projectItem={project}/>)
    }</div>
  return (
    <div>
        {/*'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'*/}

        <h2 className='text-xl font-bold text-violet-700'>Projects</h2>
       {content}
    </div>
  )
}
