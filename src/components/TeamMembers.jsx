import React from 'react'
import Member from './ui/Member'
import { useGetTeamMembersQuery } from '../features/team/teamApi'
import { Alert, CircularProgress } from '@mui/material';

export default function TeamMembers() {
  const {data: members, isLoading, isError, error} = useGetTeamMembersQuery()
  
  // WHAT TO RENDER
  let content;
  if(isLoading) content = <div className=''><CircularProgress color="success" /></div>
  else if(!isLoading && isError) content = <div><Alert severity="error">{error?.data}</Alert></div>
  else if(!isLoading && !isError && members?.length === 0) content = <div><Alert severity="info">No data found</Alert></div>
  else if(!isLoading && !isError && members?.length > 0) content = <div>{
    members.map(member => <Member key={member.id} info={member}/>)
  }</div>
  return (
    <div className='mt-4'>
        <h2 className='text-xl font-bold mb-3 text-violet-700'>Team Members</h2>
        {content}
    </div>
  )
}
