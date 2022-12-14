import { AxiosRequestConfig } from 'axios';

const env = process.env.NODE_ENV;

export let API_URL = 'https://hienpham-blog-api.herokuapp.com/api/v1/';
if (env == 'development') {
  API_URL = 'https://hienpham-blog-api.herokuapp.com/api/v1/';
} else if (env == 'production') {
  API_URL = 'https://hienpham-blog-api.herokuapp.com/api/v1/';
}

export const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export const url = {
  getPosts: 'posts',
  getSlugs: 'posts/slugs',
  getTagSlugs: 'tags/slugs',
  comments: 'comments',
  repliesComments: 'comments/replies',
  addReplyComments: 'comments/reply',
  updateBookmark: 'posts/$id/bookmark',
  getBookmarks: 'posts/bookmarks',
  getRecentPosts: 'posts/recent-posts',
  getTags: 'tags',
  register: 'auth/register',
  login: 'auth/login',
  logout: 'auth/logout',
  refreshToken: 'auth/refresh-token',
  profile: 'auth/profile',
};
