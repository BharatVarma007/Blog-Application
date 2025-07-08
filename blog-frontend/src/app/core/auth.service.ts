// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Auth {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/token/`, { username, password });
  }

  register(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/register/`, { username, password });
  }

  // logout() {
  //   localStorage.removeItem('access_token');
  //   this.router.navigate(['/login']);
  // }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
  localStorage.removeItem('access_token');
  alert('Logged out');
}

  getCurrentUser() {
  const token = this.getToken();
  if (!token) return null;

  // Decode the JWT token
  const payload = JSON.parse(atob(token.split('.')[1]));
  return {
    id: payload.user_id,
    username: payload.username // only if username is in the token
  };
}
}
