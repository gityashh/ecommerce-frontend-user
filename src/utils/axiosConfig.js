export const base_url = "https://ecommerce-1f70.onrender.com/api/";

export const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    return token?.token;
}

export const config = {
    headers: {
        Authorization: `Bearer ${
            getTokenFromLocalStorage() !== null ? getTokenFromLocalStorage() : ""
            }`,
        Accept: "application/json",
    },
};
