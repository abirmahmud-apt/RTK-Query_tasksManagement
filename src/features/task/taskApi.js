import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getTasks: builder.query({
            query: () => `/tasks`
        }),
        getTask: builder.query({
            query: (id) =>  `/tasks/${id}`
        }),
        addTask: builder.mutation({
            query: (data) =>({
                url: '/tasks',
                method: "POST",
                body: data
            }),
        
        async onQueryStarted(arg, {queryFulfilled, dispatch}){
            const pathResult = dispatch(apiSlice.util.updateQueryData('getTasks', undefined, (draft) =>{
                draft.push(arg)
            }))
            try{
                await queryFulfilled    
            }catch(err){
                pathResult.undo()
            }
        }


        }),
        editTask: builder.mutation({
            query: ({id, data}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data
            }),
            async onQueryStarted({id, data}, {queryFulfilled, dispatch}){
                const pathResult = dispatch(apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                    const editedItem = draft.find(item => item.id === id)
                    const index = draft.indexOf(editedItem)
                    draft.splice(index, 1, data)
                }))
                try{
                    await queryFulfilled
                }catch(arr){
                    pathResult.undo()
                }
            }
        }),
        deleteTask: builder.mutation({
            query: (id) =>({
                url: `/tasks/${id}`,
                method: "DELETE"
            }),

            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                const pathResult = dispatch(apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                    const deleteItem = draft.find(item => item.id === arg)
                    const index = draft.indexOf(deleteItem)
                    draft.splice(index, 1)
                }))
                try{
                    await queryFulfilled
                }
                catch(err){
                    pathResult.undo()
                }
            }
        })
    })
})

export const {useGetTasksQuery, useGetTaskQuery, useAddTaskMutation, useEditTaskMutation, useDeleteTaskMutation} = taskApi