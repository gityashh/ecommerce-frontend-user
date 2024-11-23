import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}

export const getProducts = createAsyncThunk("product/getProducts", async (thunkAPI) => {
    try {
        return await productService.getProducts()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        }).addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.error
        })
    }
})

export default productSlice.reducer