import { url } from './config';
import { httpClient } from './http.client';

export const getPosts = (search?: string) => {
  return httpClient().get(url.getPosts, {
    params: {
      search,
    },
  });
};

export const getPostSlugs = () => {
  return httpClient().get(url.getSlugs);
};

export const getPost = (slug: string) => {
  return httpClient().get(`${url.getPosts}/${slug}`);
};
