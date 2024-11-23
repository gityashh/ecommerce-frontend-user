import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
  }
  return response.data;
};

const loginUser = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
  }
  return response.data;
};

const getUserWishlist = async () => { 
  const response = await axios.get(`${base_url}user/wishlist`, config)
  console.log(response.data);
  return response.data
}

export const userService = {
  registerUser,
  loginUser,
  getUserWishlist,
};
