import { useParams } from 'react-router-dom'
import EditForm from '../components/EditForm'
import { useGetTaskQuery } from '../features/task/taskApi';

export default function AddTask() {
    const {id} = useParams()
    const {data: task , isLoading, isError} = useGetTaskQuery(id)

    // WHAT TO RENDER
    let content;
    if(isLoading) content = <div className='text-xl font-bold my-5 text-center'>Loading...</div>
    if(!isLoading && isError) content = <div className='text-xl font-bold my-5 text-center'>Where is an error!</div>
    if(!isLoading && !isError && task.id) content = <EditForm task={task}/>

  return (
    <>{content}</>
  )
}
