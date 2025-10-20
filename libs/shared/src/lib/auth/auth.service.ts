import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthMessage {
  type: 'AUTH_LOGIN' | 'AUTH_LOGOUT';
  user?: User;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private broadcastChannel: BroadcastChannel;
  private subscriptions = new Subscription();
  
  public currentUser$ = this.currentUserSubject.asObservable();
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Initialize broadcast channel for cross-port communication
    this.broadcastChannel = new BroadcastChannel('acme-auth');
    
    // Listen for auth messages from other ports/tabs
    this.setupBroadcastListener();
    
    // Check if user is already logged in from localStorage
    this.loadSavedUser();
    
    // Listen for storage events (for same-origin different-port communication)
    this.setupStorageListener();
  }

  private setupBroadcastListener() {
    const subscription = fromEvent<MessageEvent<AuthMessage>>(this.broadcastChannel, 'message')
      .pipe(
        filter(event => event.data && ['AUTH_LOGIN', 'AUTH_LOGOUT'].includes(event.data.type))
      )
      .subscribe(event => {
        const { type, user } = event.data;
        
        if (type === 'AUTH_LOGIN' && user) {
          this.setUserState(user, false); // false = don't broadcast again
        } else if (type === 'AUTH_LOGOUT') {
          this.clearUserState(false); // false = don't broadcast again
        }
      });
    
    this.subscriptions.add(subscription);
  }

  private setupStorageListener() {
    // Listen for localStorage changes from other tabs/ports
    window.addEventListener('storage', (event) => {
      if (event.key === 'currentUser') {
        if (event.newValue) {
          const user = JSON.parse(event.newValue);
          this.setUserState(user, false);
        } else {
          this.clearUserState(false);
        }
      }
    });
  }

  private loadSavedUser() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        this.setUserState(user, false);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('currentUser');
      }
    }
  }

  private setUserState(user: User, shouldBroadcast = true) {
    // Update local state
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
    
    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Broadcast to other ports/tabs
    if (shouldBroadcast) {
      this.broadcastAuthMessage('AUTH_LOGIN', user);
    }
  }

  private clearUserState(shouldBroadcast = true) {
    // Update local state
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    
    // Remove from localStorage
    localStorage.removeItem('currentUser');
    
    // Broadcast to other ports/tabs
    if (shouldBroadcast) {
      this.broadcastAuthMessage('AUTH_LOGOUT');
    }
  }

  private broadcastAuthMessage(type: AuthMessage['type'], user?: User) {
    const message: AuthMessage = {
      type,
      user,
      timestamp: Date.now()
    };
    
    try {
      this.broadcastChannel.postMessage(message);
    } catch (error) {
      console.warn('Failed to broadcast auth message:', error);
    }
  }

  login(username: string, password: string): Observable<{ success: boolean; user?: User; error?: string }> {
    return new Observable(observer => {
      // Simulate API call with timeout
      setTimeout(() => {
        // Mock authentication - in real app, this would be an HTTP call
        if (username && password) {
          const user: User = {
            id: '1',
            username: username,
            email: `${username}@acme.com`,
            firstName: username.charAt(0).toUpperCase() + username.slice(1),
            lastName: 'User'
          };

          // Set user state with broadcasting
          this.setUserState(user, true);

          observer.next({ success: true, user });
        } else {
          observer.next({ success: false, error: 'Username and password are required' });
        }
        observer.complete();
      }, 1000); // Simulate network delay
    });
  }

  logout(): void {
    // Clear user state with broadcasting
    this.clearUserState(true);
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscriptions.unsubscribe();
    
    // Close broadcast channel
    this.broadcastChannel.close();
  }
}