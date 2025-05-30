import { Component }       from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,    // для <router-outlet>
    RouterLink       // если вы используете [routerLink] в шаблоне
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
