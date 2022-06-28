import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;



const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('usId')) {
        if (req.headers) {
            req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('usId')).token}`;
        }
    }
    return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);



