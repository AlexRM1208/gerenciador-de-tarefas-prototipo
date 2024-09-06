import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Autenticação fictícia
    if (email === 'admin@example.com' && password === 'password') {
      this.isAuthenticated = true;
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}
