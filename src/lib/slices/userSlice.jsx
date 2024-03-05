"use client"; 

import { createSlice } from "@reduxjs/toolkit";

const initialStateUser = {
    user : { name : 'khosro' } , 
    loading : false
}

export const userStateSlice = createSlice({
    name : "userSlice" ,
    initialState : initialStateUser , 
    reducers : {
        asyncMission : (state , action) => {
            state.loading = action.payload;
        }
    }
})

export const { asyncMission } = userStateSlice.actions;
export default userStateSlice.reducer;