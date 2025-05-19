import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { appConfig } from './app.config';
import { SharedModule } from './shared/shared.module';
import { PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { routes } from './app.routes';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [SharedModule,MenubarModule,RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})  
export class AppComponent implements OnInit {
    isDark = false;
   ngOnInit() {
  }
  toggleTheme() {
    this.isDark = !this.isDark;
    const root = document.documentElement;
    if (this.isDark) {
      root.classList.add('my-app-dark'); // this matches your PrimeNG theme selector
      // document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      root.classList.remove('my-app-dark');
      // document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }
}
