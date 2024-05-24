import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://localhost:5001';
// const baseURL = 'https://192.168.1.1:5001'

const api = axios.create({
  baseURL,
})

export default api;