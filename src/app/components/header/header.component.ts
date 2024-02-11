import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkThemeEnabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkTheme();
  }

  checkTheme() {
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme !== null) {
      this.darkThemeEnabled = savedTheme === 'true';
    } else {
      this.darkThemeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.updateTheme();
  }
  

  toggleTheme() {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    localStorage.setItem('dark-theme', String(this.darkThemeEnabled));
    this.updateTheme();
  }

  updateTheme() {
    if (this.darkThemeEnabled) {
      document.body.classList.add('dark'); // Ou document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark'); // Ou document.documentElement.classList.remove('dark');
    }
  }
}
