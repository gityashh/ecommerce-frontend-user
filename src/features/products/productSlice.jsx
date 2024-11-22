import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    message: "",
}


export const getProducts = createAsyncThunk("product/getProducts", async (thunkAPI) => {
    try {
        return await productService.getProducts()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})