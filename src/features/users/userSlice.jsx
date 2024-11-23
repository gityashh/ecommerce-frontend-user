import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userService } from "./userService";
import { toast } from "react-toastify";
import { getTokenFromLocalStorage } from "../../utils/axiosConfig";

export const registerUser = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      return await userService.registerUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      return await userService.loginUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const getUserWishlist = createAsyncThunk(
  "user/getUserWishlist",
  async (thunkAPI) => {
    try {
      return await userService.getUserWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  return user;
}

const initialState = {
  user: getUserFromLocalStorage() || null,
  createdUser: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  wishlist: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess == true) {
          toast.info("user registered successfully ");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError == true) {
          toast.error(action.payload);
        }
      });
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess == true) {
          localStorage.setItem("token", action.payload.token);
          toast.info("user logged in successfully ");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError == true) {
          toast.error(action.payload);
        }
      })
      .addCase(getUserWishlist.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getUserWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        if (state.isError == true) {
          toast.error(action.payload);
        }
      });
  },
});

export default authSlice.reducer;
