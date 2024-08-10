import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Bienvenido a la página principal</h1>
    <p>Esta es la página de inicio de nuestra aplicación Angular.</p>
  `,
  styles: [`
    h1 { color: #3f51b5; }
  `]
})
export class HomeComponent {}