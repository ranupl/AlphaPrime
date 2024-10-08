import axios from "axios";

export const createCardApi = async (payload) => {
    try {
        const token = localStorage.getItem('token'); 

        const response = await axios.post(`http://localhost:7001/api/v1/cards/createCard`, payload, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
