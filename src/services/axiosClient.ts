import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://todoalucomapi.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
