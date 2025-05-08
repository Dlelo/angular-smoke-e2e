import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="login()">
        <input [(ngModel)]="email" name="email" placeholder="Email" required />
        <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'user@example.com' && this.password === 'password123') {
      localStorage.setItem('user', JSON.stringify({ email: this.email }));
      this.router.navigate(['/items']);
    } else {
      alert('Invalid credentials');
    }
  }

}
