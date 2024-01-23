import { Routes } from '@angular/router';
import { LoginComponent } from './Views/Pages/Components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
];
