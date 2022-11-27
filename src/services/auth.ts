import { AxiosResponse } from 'axios';
import { Login, Register } from 'src/models/auth/auth';
import { Profile } from 'src/models/profile/profile';
import { url } from './config';
import { httpClient } from './http.client';

export const register = (payload: Register) => {
  return httpClient().post(url.register, payload);
};

export const login = (
  payload: Login
): Promise<
  AxiosResponse<{
    accessToken: string;
  }>
> => {
  return httpClient().post(url.login, payload);
};

export const refreshToken = (): Promise<
  AxiosResponse<{
    accessToken: string;
  }>
> => {
  return httpClient().get(url.refreshToken);
};

export const getProfile = (): Promise<
  AxiosResponse<{
    user: Profile;
  }>
> => {
  return httpClient().get(url.profile);
};

export const logout = () => {
  return httpClient().delete(url.logout);
};
