import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StandaloneNavComponent } from './components/standalone-nav.component';

@Component({
  selector: 'app-cart-entry',
  imports: [RouterModule, StandaloneNavComponent],
  template: `
    <app-standalone-nav></app-standalone-nav>
    <main style="min-height: calc(100vh - 70px);">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}