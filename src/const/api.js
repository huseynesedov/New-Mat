import axios from "axios";
import siteUrl from "./const";
import {AccountApi} from "../api/account.api";
import {useAuth} from "../AuthContext"; // Assuming this has the refresh token logic
const BASE_URL = siteUrl;

// Axios instance
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
});

// Add a request interceptor to add the Authorization header to each request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle token expiration (401 error)
axiosInstance.interceptors.response.use(
    (response) => {
        // If the response is successful, just return the response
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const {logout} = useAuth()
        if (error.response.status === 401 && !originalRequest._retry) {
            // Mark request as retry to avoid infinite loops
            originalRequest._retry = true;
            try {
                // Call your refresh token API
                let refreshToken = localStorage.getItem('refreshToken');
                const newToken = await AccountApi.RefreshToken({refreshToken}); // Assumes you have a refreshToken function in AccountApi

                if (newToken) {
                    // Update local storage with the new token
                    localStorage.setItem("token", newToken);

                    // Update the Authorization header for the original request
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;

                    // Retry the original request with the new token
                    return axiosInstance(originalRequest);
                }
            } catch (err) {
                console.error("Failed to refresh token", err);
                logout();
                // Optionally handle logout or redirect to login if token refresh fails
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);

const createConfig = (params, contentType) => {
    let config = {};
    if (params) {
        config["params"] = params;
    }
    config["headers"] = {"Content-Type": contentType};
    return config;
}

const createJsonConfig = (params) => {
    return createConfig(params, "application/json;charset=UTF-8");
}

const createFormDataConfig = (params) => {
    return createConfig(params, "multipart/form-data");
}

export const BaseApi = {
    get(url, params) {
        return axiosInstance.get(url, createJsonConfig(params)).then(response => response.data);
    },
    post(url, params, queryParams) {
        return axiosInstance.post(url, params, createJsonConfig(queryParams)).then(response => response.data);
    },
    postFormData(url, params, queryParams) {
        const formData = new FormData();
        Object.keys(params).forEach(key => {
            let value = params[key];
            formData.append(key, value);
        });
        return axiosInstance.post(url, formData, createFormDataConfig(queryParams)).then(response => response.data);
    },
    postFormDataFile(url, params) {
        const formData = new FormData();
        Object.keys(params).forEach(key => {
            let value = params[key];
            formData.append(key, value);
        });
        return axiosInstance.post(url, formData, createFormDataConfig()).then(response => response.data);
    },
    delete(url, params) {
        return axiosInstance.delete(url, createJsonConfig(params)).then(response => response.data);
    },
    deleteNew(url, params) {
        return axiosInstance.delete(url, {
            ...createJsonConfig(),
            data: params
        }).then(response => response.data);
    },
    put(url, params) {
        return axiosInstance.put(url, params, createJsonConfig()).then(response => response.data);
    },
    getBaseUrl() {
        return BASE_URL;
    }
};
