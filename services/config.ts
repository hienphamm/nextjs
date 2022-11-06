import { AxiosRequestConfig } from "axios";

let URL = "http://localhost:3001/api/v1/";

export const config: AxiosRequestConfig = {
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const url = {
  getPosts: "posts",
  getSlugs: "posts/slugs",
  getTagSlugs: "tags/slugs",
  comments: "comments",
  repliesComments: "comments/replies",
  addReplyComments: "comments/reply",
  updateBookmark: "posts/$id/bookmark",
  getBookmarks: "posts/bookmarks",
  getRecentPosts: "posts/recent-posts",
  getTags: "tags",
  register: "auth/register",
  login: "auth/login",
  logout: "auth/logout",
  refreshToken: "auth/refresh-token",
  profile: "auth/profile",
};
