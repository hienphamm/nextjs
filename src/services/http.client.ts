import axiosInstance from './axios';
import { config } from './config';
import JwtProvider from 'src/utils/jwt';

export const httpClient = () => {
  const token = JwtProvider.getToken();

  const authApi = axiosInstance(config);

  if (token) {
    authApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete authApi.defaults.headers.common['Authorization'];
  }

  return authApi;
};
