import { rest } from 'msw';
import { API_URL } from 'src/services/config';

export const mockedPosts = [
  {
    _id: '62d57300cd396ef30b476135',
    title: 'Docker Desktop 1904',
    content:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    viewCount: 0,
    shareCount: 0,
    image: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2394.jpg',
    user: '62b96abf496ca541f761a21c',
    tags: ['62d592a095692e40a2d077a5'],
    commentCount: 1,
    readTime: 10,
    isBookmarked: false,
    bookmarkedBy: ['62dd8357e666eb4a684045e6'],
    previewContent:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    createdAt: '2022-07-18T14:49:36.790Z',
    slug: 'docker',
    __v: 0,
    bookmarkedUpdatedAt: '2022-07-27T17:06:33.326Z',
  },
  {
    _id: '62d572f7cd396ef30b476130',
    title: 'Python',
    content:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    viewCount: 0,
    shareCount: 0,
    image: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2394.jpg',
    user: '62b96abf496ca541f761a21c',
    tags: ['62cbea68d337259492d68195'],
    commentCount: 20,
    readTime: 10,
    isBookmarked: false,
    bookmarkedBy: [],
    previewContent:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    createdAt: '2022-07-18T14:49:27.435Z',
    slug: 'python',
    __v: 0,
    bookmarkedUpdatedAt: '2022-07-27T17:06:37.240Z',
  },
  {
    _id: '62d572cacd396ef30b47611f',
    title: 'SQL ',
    content:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    viewCount: 0,
    shareCount: 0,
    image: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_2394.jpg',
    user: '62b96abf496ca541f761a21c',
    tags: ['62cbea68d337259492d68195'],
    commentCount: 1,
    readTime: 10,
    isBookmarked: false,
    bookmarkedBy: [],
    previewContent:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    createdAt: '2022-07-18T14:48:42.688Z',
    slug: 'sql',
    __v: 0,
    bookmarkedUpdatedAt: '2022-07-27T17:06:42.159Z',
  },
];

export const fetchPostsSuccess = () => {
  return rest.get(API_URL, (_req, res, ctx) => {
    return res(ctx.json(mockedPosts));
  });
};

export const fetchPostsEmpty = () => {
  return rest.get(API_URL, (_req, res, ctx) => {
    return res(ctx.json([]));
  });
};
