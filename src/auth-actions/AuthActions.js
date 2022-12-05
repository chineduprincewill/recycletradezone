import axios from "../api/axios";

const REGISTER_URL = 'register';

export const registerUser = async (body) => {

    const response = await axios.post(REGISTER_URL,
        body,
        {
            headers: { 'Accept' : 'application/json' }
        }
    );

    return response.status;
    
}