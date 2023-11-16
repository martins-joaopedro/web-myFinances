import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-node-iult.onrender.com" 
})