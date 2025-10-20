import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService, User } from '@acme/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-standalone-nav',
  imports: [CommonModule, RouterModule],
  template: `
    <style>
      .standalone-nav {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 1rem 2rem;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .nav-brand {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .user-welcome {
        font-size: 0.9rem;
        opacity: 0.9;
      }

      .logout-btn {
        background: rgba(255,255,255,0.2);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .logout-btn:hover {
        background: rgba(255,255,255,0.3);
      }
    </style>

    <nav class="standalone-nav">
      <div class="nav-brand">🛍️ ACME Shop</div>
      <div class="nav-actions">
        @if (isAuthenticated$ | async; as isAuth) {
          @if (isAuth) {
            @if (currentUser$ | async; as user) {
              <span class="user-welcome">Welcome, {{ user.firstName }}!</span>
            }
            <button class="logout-btn" (click)="logout()">Logout</button>
          }
        }
      </div>
    </nav>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class StandaloneNavComponent {
  currentUser$: Observable<User | null>;
  isAuthenticated$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser$ = this.authService.currentUser$;
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}