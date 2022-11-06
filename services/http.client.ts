import axiosInstance from "./axios";
import { config } from "./config";

export const httpClient = () => {
  const authApi = axiosInstance(config);
  return authApi;
};
