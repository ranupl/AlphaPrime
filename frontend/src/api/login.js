import axios from "axios";

export const loginApi = async (payload) => {
    try {
        const response = await axios.post(`http://localhost:7001/api/v1/users/login`, payload);
        const token = response.data.data.token; 

        if (token) {
            localStorage.setItem("token", token);
        }

        return response;

        return response;

    } catch (error) {
        console.log(error);
    }
};