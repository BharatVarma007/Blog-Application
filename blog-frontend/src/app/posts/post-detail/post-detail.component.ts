import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../core/post.service';
import { AuthService } from '../../core/auth.service';
import { Post} from '../../core/models';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Comment as BlogComment } from '../../core/models';


@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  private auth = inject(AuthService);
  private router = inject(Router);
  newCommentContent: string = '';

  post?: Post;
  currentUser = this.auth.getCurrentUser(); // store logged-in user info

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(postId).subscribe({
      next: (data) => this.post = data,
      error: (err) => console.error('Failed to fetch post:', err)
    });
  }

  canEditPost(): boolean {
    return this.post?.author?.id === this.currentUser?.id;
  }

  canEditComment(commentAuthorId: number): boolean {
    return commentAuthorId === this.currentUser?.id;
  }

  logout() {
  this.auth.logout();
  this.router.navigate(['/login']);
  }

  editMode = false;
  editTitle = '';
  editContent = '';

  enableEdit() {
  if (this.post) {
    this.editMode = true;
    this.editTitle = this.post.title;
    this.editContent = this.post.content;
  }
  }

  cancelEdit() {
    this.editMode = false;
  }

  saveChanges() {
    if (!this.post) return;

    const updatedPost = {
      title: this.editTitle,
      content: this.editContent
    };

  this.postService.updatePost(this.post.id, updatedPost).subscribe({
    next: (updated) => {
      this.post = updated;
      this.editMode = false;
      alert('Post updated successfully');
    },
    error: (err) => alert('Failed to update post')
  });
  }

  editingCommentId: number | null = null;
  editedCommentContent = '';

  startEditComment(commentId: number, content: string) {
    this.editingCommentId = commentId;
    this.editedCommentContent = content;
  }

  cancelEditComment() {
    this.editingCommentId = null;
    this.editedCommentContent = '';
  }

  saveEditedComment(commentId: number) {
  this.postService.updateComment(commentId, { content: this.editedCommentContent }).subscribe({
  next: (updatedComment: Comment) => {
    const comment = this.post?.comments.find(c => c.id === commentId);
    // if (comment) comment.content = updatedComment.content;
    if (comment) (comment as any).content = (updatedComment as any).content;
    this.editingCommentId = null;
    this.editedCommentContent = '';
  },
  error: () => alert('Failed to update comment')
  });
  }

  deleteComment(commentId: number) {
  if (confirm("Are you sure you want to delete this comment?")) {
    this.postService.deleteComment(commentId).subscribe({
      next: () => {
        // Remove the comment from UI
        this.post!.comments = this.post!.comments.filter(c => c.id !== commentId);
      },
      error: () => alert("Failed to delete comment.")
    });
  }
  }

  deletePost() {
  if (confirm("Are you sure you want to delete this post?")) {
    this.postService.deletePost(this.post!.id).subscribe({
      next: () => {
        this.router.navigate(['/posts']);  // Redirect to posts list
      },
      error: () => alert("Failed to delete post.")
    });
  }
  }

  addComment(): void {
  if (!this.newCommentContent.trim() || !this.post) return;

this.postService.createComment(this.post.id, this.newCommentContent).subscribe(
  (comment: BlogComment) => {
    this.post!.comments.push(comment);
    this.newCommentContent = '';
  },
  (error) => {
    alert('Failed to post comment');
  }
);
}

}
