import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getTasks: builder.query({
            query: `/tasks?_sort=deadline&_order=desc`
        }),
        getTask: builder.query({
            query: (id) =>  `/tasks/id`
        }),
        addTask: builder.mutation({
            query: (data) =>({
                url: '/tasks',
                method: "POST",
                body: data
            })
        }),
        editTask: builder.mutation({
            query: ({id, data}) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteTask: builder.mutation({
            query: (id) =>({
                url: `/tasks/${id}`,
                method: "DELETE"
            })
        })
    })
})

export const {useGetTasksQuery, useGetTaskQuery, useAddTaskMutation, useEditTaskMutation, useDeleteTaskMutation} = taskApi