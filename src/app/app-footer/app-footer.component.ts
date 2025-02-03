import { Component } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  imports: [],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}