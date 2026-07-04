import {createSlice} from '@reduxjs/toolkit'
import { deleteEmployee, getEmployees, postEmployees, upateEmployee } from './employee.thunk';

const initialState={
    employees:[],
    loading:false,
    error:null
}



const employeeSlice=createSlice({
    name:"employee",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getEmployees.pending,(state,action)=>{
            state.loading=true
            state.error=null

        }),
        builder.addCase(getEmployees.fulfilled,(state,action)=>{
            state.employees=action.payload;
            state.loading=false
        }),
        builder.addCase(getEmployees.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload

        })

        //post employee case
         builder.addCase(postEmployees.pending,(state,action)=>{
            state.loading=true
            state.error=null

        }),
        builder.addCase(postEmployees.fulfilled,(state,action)=>{
            state.loading=false
        }),
        builder.addCase(postEmployees.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload

        })

        //delete employee
        builder.addCase(deleteEmployee.pending,(state,action)=>{
            state.loading=true
            state.error=null

        }),
        builder.addCase(deleteEmployee.fulfilled,(state,action)=>{
            state.loading=false
        }),
        builder.addCase(deleteEmployee.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload

        })

        //put employee
        builder.addCase(upateEmployee.pending,(state,action)=>{
            state.loading=true
            state.error=null

        }),
        builder.addCase(upateEmployee.fulfilled,(state,action)=>{
            state.loading=false
        }),
        builder.addCase(upateEmployee.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload

        })



    }
})

export const {} = employeeSlice.actions;
export default employeeSlice.reducer