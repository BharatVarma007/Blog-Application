

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.auth.login(username!, password!).subscribe({
      next: (res: any) => {
        this.auth.setToken(res.access);
        this.router.navigate(['/posts']); // go to post list
      },
      error: err => alert('Login failed: ' + err.error.detail)
    });
  }

  goToRegister() {
  this.router.navigate(['/register']);
}
}
