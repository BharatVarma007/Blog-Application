export interface User {
  id: number;
  username: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: User;
  created_at: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  post: number;
  content: string;
  author: User;
  created_at: string;
}