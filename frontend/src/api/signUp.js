import axios from "axios";

export const signUpApi = async (payload) => {
    try {
        const response = await axios.post(`http://localhost:7001/api/v1/users/signUp`, payload);
        const token = response.data.data.token; 

        if (token) {
            localStorage.setItem("token", token);
        }

        return response;

    } catch (error) {
        console.log(error);
    }
};