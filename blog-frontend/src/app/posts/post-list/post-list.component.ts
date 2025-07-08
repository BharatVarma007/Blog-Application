import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../core/post.service';
import { Post } from '../../core/models';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  private postService = inject(PostService);
  posts: Post[] = [];
  private auth = inject(AuthService);
  private router = inject(Router);


  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Failed to load posts:', err)
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
