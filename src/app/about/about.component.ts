import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Acerca de nosotros</h1>
    <p>Somos una empresa dedicada a crear soluciones innovadoras.</p>
  `,
  styles: [`
    h1 { color: #ff4081; }
  `]
})
export class AboutComponent {}