import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav>
      <a [routerLink]="['']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a> |
      <a [routerLink]="['about']" routerLinkActive="active">About</a> |
      <a [routerLink]="['contact']" routerLinkActive="active">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav { padding: 1rem; background-color: #f0f0f0; }
    a { margin-right: 1rem; text-decoration: none; color: #333; }
    .active { font-weight: bold; }
  `]
})
export class AppComponent {
  title = 'miproyecto';
}