import axios from 'axios';


const apiService = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_BASE_URL as string
})

export default apiService