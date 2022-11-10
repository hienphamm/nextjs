import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export default function axiosInstance(
  options: AxiosRequestConfig,
): AxiosInstance {
  const axiosInstance = axios.create(options);

  axiosInstance.interceptors.response.use(
    (response) => {
      return {
        status: response.status,
        data: response.data,
      } as AxiosResponse;
    },
    (error: AxiosError) => {
      return Promise.reject(error.response?.data);
    },
  );

  return axiosInstance;
}
