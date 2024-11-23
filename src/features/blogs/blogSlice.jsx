import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogService } from "./blogService";


const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
    message: "",
  currentBlog: null,
};

export const getBlog = createAsyncThunk("blog/getBlog", async (id, thunkAPI) => {
  try {
    return await blogService.getBlog(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const getBlogs = createAsyncThunk("blog/getBlogs", async (thunkAPI) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentBlog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
  },
});

export default blogSlice.reducer;
