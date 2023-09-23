import { createSlice } from "@reduxjs/toolkit";


const resultSlice = createSlice({
  
        name: "result",
        initialState: {
            resultValue:''
        },
    reducers: {
        sendSearchResult: (state,action) => {   
             state.resultValue = action.payload
        }
       
       
    }    
    
})

export const { sendSearchResult } = resultSlice.actions
export default resultSlice.reducer