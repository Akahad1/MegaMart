"use server";
import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: "https://green-leaf-server-site.vercel.app/api/a6",
});

export default AxiosInstance;
