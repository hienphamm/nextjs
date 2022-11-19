import { Tag } from '../tag/tag';

export interface PostFilterParams {
  start: number;
  pageSize: number;
  q: string;
}

export interface PaginationFilterParams {
  page?: number;
  pageSize: number;
  postId?: string;
  start?: number;
}

export interface IPost {
  _id: string;
  title: string;
  content: string;
  viewCount: number;
  shareCount: number;
  image: string;
  createdAt: string;
  commentCount: number;
  comment: string;
  readTime: number;
  slug: string;
  tags: Tag[];
  previewContent: string;
  bookmarkedUpdatedAt: string;
  bookmarkedBy: string[];
}
