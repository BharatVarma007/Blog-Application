import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'blog-frontend';
}




















// TEMPORARY TESTING


// import { Component, inject } from '@angular/core';
// import { AuthService } from './core/auth.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [],
//   template: `
//     <div class="container mt-5">
//       <h2>JWT Auth Interceptor Test</h2>
//       <button class="btn btn-primary" (click)="doLogin()">Login</button>
//       <button class="btn btn-success ms-2" (click)="testApi()">Test Auth API</button>
//     </div>
//   `
// })
// export class App {
//   private auth = inject(AuthService);
//   private http = inject(HttpClient);

//   doLogin() {
//     this.auth.login('admin', 'admin').subscribe((res: any) => {
//       this.auth.setToken(res.access);
//       alert('Token stored successfully!');
//     });
//   }

//   testApi() {
//     this.http.get('http://127.0.0.1:8000/api/posts/').subscribe({
//       next: data => console.log('API Success:', data),
//       error: err => console.error('API Error:', err)
//     });
//   }
// }



