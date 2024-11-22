import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { userService } from "./userService"
import { toast } from "react-toastify"

export const registerUser = createAsyncThunk("user/register",
async (data,thunkAPI) => {
    try {
        console.log(data);
        
        return await userService.registerUser(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const initialState = {
    createdUser: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.createdUser = action.payload
            if(state.isSuccess == true) {
                toast.info("user registered successfully ")
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            if(state.isError == true) {
                toast.error(action.payload)
            }
        })
    }
})

export default authSlice.reducer