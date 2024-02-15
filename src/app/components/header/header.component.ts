import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTheme: string = 'light'; // Valor padrão é 'light'

  constructor() { }

  ngOnInit(): void {
    this.checkTheme();
  }

  checkTheme() {
    const savedTheme = localStorage.getItem('color-theme');
    // Se o tema está salvo, use-o. Senão, defina com base na preferência do sistema.
    this.currentTheme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light');
    this.updateTheme();
  }
  
  toggleTheme() {
    // Alterna entre temas 'light' e 'dark'
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('color-theme', this.currentTheme);
    this.updateTheme();
  }

  updateTheme() {
    if (this.currentTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
