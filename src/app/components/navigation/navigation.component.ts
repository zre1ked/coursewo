import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navigation">
      <div class="nav-container">
        <a routerLink="/" class="logo">Murrey</a>
        <div class="nav-links">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Обзор</a
          >
          <a routerLink="/enemies" routerLinkActive="active">Противники</a>
          <a routerLink="/puzzles" routerLinkActive="active">Задания</a>
          <a routerLink="/quests" routerLinkActive="active">Квесты</a>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navigation {
        background-color: rgba(26, 26, 26, 0.95);
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
      }

      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: #4c8217;
        text-decoration: none;
        font-size: 1.2rem;
      }

      .nav-links {
        display: flex;
        gap: 2rem;
      }

      .nav-links a {
        color: #4c8217;
        text-decoration: none;
        font-size: 1rem;
      }

      .nav-links a:hover,
      .nav-links a.active {
        color: #6ab71f;
      }
    `,
  ],
})
export class NavigationComponent {}
