import { Box, Button, MenuItem, Skeleton, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGetProjectsQuery } from '../features/project/projectApi'
import { useGetTeamMembersQuery } from '../features/team/teamApi'
import { useEditTaskMutation } from '../features/task/taskApi'
import { useNavigate } from 'react-router-dom'

export default function EditForm({task}) {

    const {taskName: eTaskName, teamMember: eTeamMember, project: eProject, deadline: eDeadline} = task || {}

    const [taskName, setTaskName] = useState(eTaskName)
    const [projectName, setProjectName] = useState(eProject?.projectName)
    const [member, setMember] = useState(eTeamMember?.name)
    const [date, setDate] = useState(eDeadline)

    const [teamMember, setTeamMember] = useState({})
    const [project, setProject] = useState({})
    const navigate = useNavigate()

    const [editTask] = useEditTaskMutation()
    const {data: projects, isLoading: projectIsLoading, isError: projectIsError} = useGetProjectsQuery()
    const {data: members, isLoading: membersIsLoading, isError: membersIsError} = useGetTeamMembersQuery()
    
    useEffect(() =>{
        if(projects?.length>0 && members?.length>0){
            const teamMember = members.find(m => m?.name === member)
            const project = projects.find(p => p?.projectName === projectName)
            setTeamMember(teamMember)
            setProject(project)
        }
    }, [projects, members, member, projectName])

    // Project name
    let projectContent;
    if(projectIsLoading) projectContent = <Box sx={{ m: 1, width: '40ch' }}><Skeleton animation="wave" sx={{ height: 60}}/></Box>

    if(!projectIsLoading && !projectIsError && projects?.length > 0) projectContent = <TextField
                required
                value={projectName}
                onChange={e => setProjectName(e.target.value)}
                id="outlined-select-currency"
                label='Project Name'
                select
                sx={{ m: 1, width: '40ch' }}
                size='small'
            >
                {/*  */}
                {
                    projects.map(project => <MenuItem key={project.id} value={project?.projectName}>{project?.projectName}</MenuItem>)
                }
            </TextField>
    

    // TeamMember name
    let memberContent;
    if(membersIsLoading) memberContent = <Box sx={{ m: 1, width: '40ch' }}><Skeleton animation="wave" sx={{ height: 60}}/></Box>

    if(!membersIsLoading && !membersIsError && members?.length > 0) memberContent = <TextField
    required
    value={member}
    onChange={e => setMember(e.target.value)}
    id="outlined-select-currency"
    label='Assign To'
    select
    sx={{ m: 1, width: '40ch' }}
    size='small'
>
    {
        members.map(member => <MenuItem key={member.id} value={member?.name}>{member?.name}</MenuItem>)
    }
        </TextField>

    const handleSubmit = (e) =>{
        e.preventDefault()
        editTask({
            id:task?.id,
            data: {
                taskName,
                teamMember,
                project,
                id:task.id,
                deadline:date
            }
        })
        navigate('/')
    }

  return (
    <div className='flex items-center justify-center' style={{height:"calc(100vh - 64px)"}}>
        <form className='w-5/12' onSubmit={handleSubmit}>
            <h2 className='text-center text-4xl font-bold text-gray-700 my-8'>Edit Task for Your Team</h2>
            {/* TASK NAME */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Task Name:</h1>
                <TextField
                    required
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    size="small"
                    placeholder='Task Name'
                    sx={{ m: 1, width: '40ch'}}
                />
            </div>

            {/* Assign To */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Assign To:</h1>
                {memberContent}
            </div>


            {/* Project Name */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Project Name:</h1>
                {projectContent}
            </div>

            {/* Deadline */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold text-gray-500'>Deadline:</h1>
                <TextField
                    required
                    value={date}
                    onChange={e => setDate(e.target.value)}
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
