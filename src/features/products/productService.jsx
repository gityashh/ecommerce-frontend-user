import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
import { getTokenFromLocalStorage } from "../../utils/axiosConfig";
import {config} from "../../utils/axiosConfig";

const getProducts = async () => {
    const response = await axios.get(`${base_url}product`)
    return response.data
}

const addToWishlist = async (productId) => {
    const response = await axios.post(`${base_url}product/wishlist`, {productId}, config)
    return response.data
}

export const productService = {
    getProducts,
    addToWishlist
}