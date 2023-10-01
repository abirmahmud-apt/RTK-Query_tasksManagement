import { createSlice } from "@reduxjs/toolkit"

const initialState = ['Scoreboard', "Flight Booking" ,"Product Cart", "Book Store", "Blog Application", "Job Finder"]

const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers: {
        projectAddRemove: (state, action) =>{
            const index = state.indexOf(action.payload)
            console.log("index", index);
            if(index === -1){
                state.push(action.payload)
            }
            else{
                state.splice(index, 1)
            }
        }
    }
})

export default projectSlice.reducer
export const {projectAddRemove} = projectSlice.actions