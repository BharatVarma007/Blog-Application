import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts/create', component: PostCreateComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];
