import React from 'react'
import { useGetProjectsQuery } from '../features/project/projectApi'
import ProjectItem from './ui/ProjectItem'

export default function Projects() {
  const {data: project, isLoading, isError, error} = useGetProjectsQuery()
  console.log(project);
  return (
    <div>
        {/*'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'*/}

        <h2 className='text-xl font-bold text-violet-700'>Projects</h2>
        <ProjectItem color={'primary'} message={"ScoreBoard"}/>
        <ProjectItem color={'secondary'} message={"ScoreBoard"}/>
        <ProjectItem color={'error'} message={"ScoreBoard"}/>
        <ProjectItem color={'info'} message={"ScoreBoard"}/>
        <ProjectItem color={'success'} message={"ScoreBoard"}/>
        <ProjectItem color={'warning'} message={"ScoreBoard"}/>
       
    </div>
  )
}
