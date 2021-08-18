import axios from "axios";
import config from "../config/config";

const axiosRequest = axios.create({
    baseURL: config.apiUrl
});

axiosRequest.interceptors.request.use(config => {
    return config;
}, error => Promise.reject(error));

export default {
    axiosRequest
};