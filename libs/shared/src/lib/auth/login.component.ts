import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
    <style>
      .login-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 2rem;
      }

      .login-card {
        background: white;
        border-radius: 20px;
        padding: 3rem;
        box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        width: 100%;
        max-width: 400px;
        position: relative;
        overflow: hidden;
      }

      .login-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
      }

      .login-header {
        text-align: center;
        margin-bottom: 2rem;
      }

      .login-logo {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      .login-title {
        font-size: 2rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .login-subtitle {
        color: #7f8c8d;
        font-size: 1rem;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .form-label {
        font-weight: 600;
        color: #2c3e50;
        font-size: 0.9rem;
      }

      .form-input {
        padding: 1rem;
        border: 2px solid #e9ecef;
        border-radius: 12px;
        font-size: 1rem;
        transition: all 0.3s ease;
        background: #f8f9fa;
      }

      .form-input:focus {
        outline: none;
        border-color: #3498db;
        background: white;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
      }

      .form-input.error {
        border-color: #e74c3c;
        background: #fdf2f2;
      }

      .error-message {
        color: #e74c3c;
        font-size: 0.85rem;
        margin-top: 0.25rem;
      }

      .login-button {
        padding: 1rem;
        background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 1rem;
        position: relative;
        overflow: hidden;
      }

      .login-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(52, 152, 219, 0.3);
      }

      .login-button:disabled {
        background: #bdc3c7;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid #ffffff40;
        border-radius: 50%;
        border-top-color: #ffffff;
        animation: spin 1s ease-in-out infinite;
        margin-right: 0.5rem;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .demo-credentials {
        margin-top: 2rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 12px;
        border-left: 4px solid #3498db;
      }

      .demo-title {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }

      .demo-text {
        font-size: 0.8rem;
        color: #7f8c8d;
        line-height: 1.4;
      }

      .demo-credentials code {
        background: #e9ecef;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
      }

      .success-message {
        background: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border: 1px solid #c3e6cb;
      }

      @media (max-width: 480px) {
        .login-container {
          padding: 1rem;
        }
        
        .login-card {
          padding: 2rem;
        }
        
        .login-title {
          font-size: 1.5rem;
        }
      }
    </style>

    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <div class="login-logo">🔐</div>
          <h1 class="login-title">Welcome Back</h1>
          <p class="login-subtitle">Sign in to access ACME Store</p>
        </div>

        <form class="login-form" (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="form-group">
            <label class="form-label" for="username">Username</label>
            <input 
              id="username"
              type="text" 
              class="form-input"
              [class.error]="usernameError"
              [(ngModel)]="credentials.username"
              name="username"
              placeholder="Enter your username"
              required
              #username="ngModel"
              [disabled]="isLoading">
            @if (usernameError) {
              <div class="error-message">{{ usernameError }}</div>
            }
          </div>

          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input 
              id="password"
              type="password" 
              class="form-input"
              [class.error]="passwordError"
              [(ngModel)]="credentials.password"
              name="password"
              placeholder="Enter your password"
              required
              #password="ngModel"
              [disabled]="isLoading">
            @if (passwordError) {
              <div class="error-message">{{ passwordError }}</div>
            }
          </div>

          @if (loginError) {
            <div class="error-message">{{ loginError }}</div>
          }

          @if (loginSuccess) {
            <div class="success-message">Login successful! Redirecting...</div>
          }

          <button 
            type="submit" 
            class="login-button"
            [disabled]="isLoading || !loginForm.form.valid">
            @if (isLoading) {
              <span class="loading-spinner"></span>
            }
            {{ isLoading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>

        <div class="demo-credentials">
          <div class="demo-title">Demo Access</div>
          <div class="demo-text">
            Use any username with any password to access the demo.<br>
            Example: <code>admin</code> / <code>password</code>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  isLoading = false;
  loginError = '';
  loginSuccess = false;
  usernameError = '';
  passwordError = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.clearErrors();
    
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;
    
    this.authService.login(this.credentials.username, this.credentials.password)
      .subscribe({
        next: (result) => {
          this.isLoading = false;
          
          if (result.success) {
            this.loginSuccess = true;
            // Redirect to the intended route or home
            const returnUrl = localStorage.getItem('returnUrl') || '/';
            localStorage.removeItem('returnUrl');
            
            setTimeout(() => {
              this.router.navigateByUrl(returnUrl);
            }, 1000);
          } else {
            this.loginError = result.error || 'Login failed';
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.loginError = 'An error occurred during login';
          console.error('Login error:', error);
        }
      });
  }

  private validateForm(): boolean {
    let isValid = true;

    if (!this.credentials.username.trim()) {
      this.usernameError = 'Username is required';
      isValid = false;
    }

    if (!this.credentials.password.trim()) {
      this.passwordError = 'Password is required';
      isValid = false;
    }

    return isValid;
  }

  private clearErrors() {
    this.loginError = '';
    this.usernameError = '';
    this.passwordError = '';
    this.loginSuccess = false;
  }
}