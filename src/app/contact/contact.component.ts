import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Contacto</h1>
    <p>Puedes contactarnos en: info&#64;example.com</p>
  `,
  styles: [`
    h1 { color: #00bcd4; }
  `]
})
export class ContactComponent {}