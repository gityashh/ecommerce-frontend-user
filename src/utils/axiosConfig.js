export const base_url = "http://localhost:3000/api/";

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
