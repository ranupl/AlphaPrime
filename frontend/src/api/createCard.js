import axios from "axios";

export const createCardApi = async (payload) => {
    try {
        const response = await axios.post(`http://localhost:7001/api/v1/cards/createCard`, payload);
        console.log(response, "card response")

        return response;

    } catch (error) {
        console.log(error);
    }
};