import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    product: {}
}

export const getProducts = createAsyncThunk("product/getProducts", async (thunkAPI) => {
    try {
        return await productService.getProducts()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})

export const getProduct = createAsyncThunk("product/getProduct", async (id, thunkAPI) => {
    try {
        return await productService.getProduct(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})

export const addToWishlist = createAsyncThunk("product/addToWishlist", async (productId, thunkAPI) => {
    try {
        return await productService.addToWishlist(productId)
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
        }).addCase(addToWishlist.pending, (state) => {
            state.isLoading = true
        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.addedToWishlist = action.payload
            state.message = "added to wishlist"
        }).addCase(addToWishlist.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.error
        }).addCase(getProduct.pending, (state) => {
            state.isLoading = true
        }).addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.product = action.payload
        }).addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.error
        })
    }
})

export default productSlice.reducer