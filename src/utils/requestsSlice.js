import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
    name : "requests",
    initialState : null , 
    reducers : {
        addRequest : (state, action)=>{
        return action.payload
        },
    }
})

export default requestSlice.reducer
export const {addRequest} = requestSlice.actions