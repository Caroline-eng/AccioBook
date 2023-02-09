import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7197",
});

export default api;
