import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/djangoreactnoteswebapp/backend/v1";

const api = axios.create({
  // Import anything that is specified inside the environment variable file, if we want to have an environment variable loaded inside our react or js code it needs to start with vite.
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl, // easy to load or change what the url should be.
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
// api going to be used instead of axios to send all of our different requests.
