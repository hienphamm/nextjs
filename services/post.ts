import { url } from "./config";
import { httpClient } from "./http.client";

export const getPosts = () => {
  return httpClient().get(url.getPosts);
};

export const getPostSlugs = () => {
  return httpClient().get(url.getSlugs);
};

export const getPost = (slug: string) => {
  return httpClient().get(`${url.getPosts}/${slug}`);
};
