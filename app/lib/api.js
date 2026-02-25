import axios from "axios";

/* ===================================
   BASE URL
=================================== */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/* ===================================
   AXIOS INSTANCE
=================================== */

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if you use cookies later
});

/* ===================================
   REQUEST INTERCEPTOR
=================================== */

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/* ===================================
   RESPONSE INTERCEPTOR
=================================== */

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default apiClient;
