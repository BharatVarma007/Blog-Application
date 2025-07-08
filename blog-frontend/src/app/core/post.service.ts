import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models';
import { Observable } from 'rxjs';
import { Comment as BlogComment } from './models';

@Injectable({ providedIn: 'root' })
export class PostService {
  private apiUrl = 'http://127.0.0.1:8000/api/posts/';
  private apiUrl_sub = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
  return this.http.get<Post>(`${this.apiUrl}${id}/`);
  }

  updatePost(id: number, data: Partial<Post>): Observable<Post> {
  return this.http.patch<Post>(`${this.apiUrl}${id}/`, data);
  }

  updateComment(commentId: number, data: { content: string }): Observable<Comment> {
  return this.http.patch<Comment>(`${this.apiUrl_sub}comments/${commentId}/`, data);
  }

  deleteComment(commentId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl_sub}comments/${commentId}/`);  
  }

  deletePost(postId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl_sub}posts/${postId}/`);
  }

  createPost(data: { title: string; content: string }): Observable<any> {
  return this.http.post(`${this.apiUrl_sub}posts/`, data);
}

createComment(postId: number, content: string) {
  return this.http.post<BlogComment>(
    `${this.apiUrl_sub}comments/`,
    {
      post: postId,
      content: content,
    }
  );
}


}
