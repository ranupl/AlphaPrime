import axios from "axios";

export const getAllCardApi = async () => {
    try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get(`http://localhost:7001/api/v1/cards/getAllCard`, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });

        return response;

    } catch (error) {
        console.log(error);
    }
};