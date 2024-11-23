import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import productReducer from "../features/products/productSlice";
import blogReducer from "../features/blogs/blogSlice";
export const store = configureStore({
    reducer: {
      auth: userReducer,
      product: productReducer,
      blog: blogReducer,
  },
});

export default store