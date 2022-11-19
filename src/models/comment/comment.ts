interface User {
  _id: string;
  username: string;
  avatar: string;
}

export interface Comment {
  _id: string;
  content: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  isEdited: boolean;
  commentCount: number;
}

export interface CommentParams {
  postId: string;
  content: string;
}

export interface ReplyCommentParams {
  commentId: string;
  content: string;
}

export interface DeleteCommentParams {
  id: string;
  isReply?: boolean;
  commentId?: string;
}

type CommentStatus = 'show' | 'hide';

export interface ToggleComment {
  id: string;
  status: CommentStatus;
}
