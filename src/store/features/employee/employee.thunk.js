import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";
import axios from "axios";


//rejectWithValue use to define custom error
export const getEmployees=createAsyncThunk('employee/getEmployees',async(_,{rejectWithValue})=>{
   try{

       const response=await api.get("employee")
       return response.data
    }
    catch(error){
        return rejectWithValue('Something went Wrong');
    }
})

export const postEmployees=createAsyncThunk('employee/postEmployees',async(details,{rejectWithValue,dispatch})=>{
   try{

       const response=await api.post("employee",details)
        dispatch(getEmployees())
       return response.data
    }
    catch(error){
        return rejectWithValue('Something went Wrong');
    }
})


export const upateEmployee=createAsyncThunk('employee/upateEmployee',async({id,details},{rejectWithValue,dispatch})=>{
   try{

       const response=await api.put(`employee/${id}`,details)
        dispatch(getEmployees())

       return response.data
    }
    catch(error){
        return rejectWithValue('Something went Wrong');
    }
})

export const deleteEmployee=createAsyncThunk('employee/deleteEmployee',async(id,{rejectWithValue,dispatch})=>{

   try{

       const response=await api.delete(`employee/${id}`)
       dispatch(getEmployees())
       return response.data
    }
    catch(error){
        return rejectWithValue('Something went Wrong');
    }
})



/*
generate three Type

employee/getEmployees/pending
employee/getEmployees/fulfilled
employee/getEmployees/rejected


*/