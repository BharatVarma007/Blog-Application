import { Component } from '@angular/core';
import { PostService } from '../../core/post.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  standalone: true,
  imports: [FormsModule,RouterModule],
})
export class PostCreateComponent {
  title = '';
  content = '';

  constructor(private postService: PostService, private router: Router) {}

  submitPost() {
    const data = { title: this.title, content: this.content };
    this.postService.createPost(data).subscribe({
      next: () => this.router.navigate(['/posts']),
      error: () => alert('Failed to create post')
    });
  }
}



// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-post-create',
//   standalone: true,
//   templateUrl: './post-create.component.html',
//   imports: [FormsModule],
// })
// export class PostCreateComponent {
//   title: string = '';
//   content: string = '';

//   constructor(private http: HttpClient, private router: Router) {}

//   submitPost(): void {
//     const payload = {
//       title: this.title,
//       content: this.content
//     };

//     this.http.post('http://127.0.0.1:8000/api/posts/', payload).subscribe({
//       next: (response) => {
//         console.log('Post created successfully', response);
//         this.router.navigate(['/posts']); // redirect to posts list
//       },
//       error: (err) => {
//         console.error('Error creating post:', err);
//         alert('Failed to create post. Make sure you are logged in.');
//       }
//     });
//   }
// }

