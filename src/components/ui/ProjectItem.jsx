import { Checkbox } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { projectAddRemove } from '../../features/project/projectSlice'

export default function ProjectItem({projectItem}) {
  const dispatch = useDispatch()
  const project = useSelector(state => state.project)
  const handleProject = (e) =>{
    dispatch(projectAddRemove(e.target.value))
  }
  return (
    <div className='flex gap-1 items-center'>
        <Checkbox value={projectItem.projectName} onClick={handleProject} checked={project.indexOf(projectItem.projectName) !== -1} color={projectItem.colorClass}/>
        <h2 className='text-lg font-semibold text-gray-800 hover:text-gray-600'>{projectItem.projectName}</h2>
    </div>
  )
}
