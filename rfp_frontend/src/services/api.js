// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api",
});

// request interceptor to add token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("rfp_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
