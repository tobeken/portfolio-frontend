import { createSlice } from "@reduxjs/toolkit"

export const jobsSlice = createSlice({
    name:"job",
    initialState:{
        job:[]
    },
    reducers:{
        setJob:(state,action)=>{
            state.job =action.payload;
        }
    }

});

export const { setJob } = jobsSlice.actions