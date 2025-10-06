import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
    name : "requests",
    initialState : null , 
    reducers : {
        addRequest : (state, action)=>{
        return action.payload
        },
        removeRequest : (state)=>{
            const newArray = state.filter((a)=> a._id != action.payload)
            return newArray
        }
    }
})

export default requestSlice.reducer
export const {addRequest ,removeRequest} = requestSlice.actions