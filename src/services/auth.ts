import { Login, Register } from "src/models/auth/auth";
import { url } from "./config";
import { httpClient } from "./http.client";

export const register = (payload: Register) => {
  return httpClient().post(url.register, payload);
};

export const login = (payload: Login) => {
  return httpClient().post(url.login, payload);
};

export const refreshToken = () => {
  return httpClient().get(url.refreshToken);
};

export const getProfile = () => {
  return httpClient().get(url.profile);
};

export const logout = () => {
  return httpClient().delete(url.logout);
};
