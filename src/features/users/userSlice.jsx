import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { authService } from "./userService"

export const registerUser = createAsyncThunk("auth/registerUser",
async (thunkAPI) => {
    try {
        return await authService.registerUser(thunkAPI.payload)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const initialState = {
    user: "",
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
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload
        })
    }
})

export default authSlice.reducer