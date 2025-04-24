import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EnemiesComponent } from './components/enemies/enemies.component';
import { PuzzlesComponent } from './components/puzzles/puzzles.component';
import { QuestsComponent } from './components/quests/quests.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'enemies',
    component: EnemiesComponent,
    data: { title: 'Enemies' },
  },
  {
    path: 'puzzles',
    component: PuzzlesComponent,
    data: { title: 'Puzzles' },
  },
  {
    path: 'quests',
    component: QuestsComponent,
    data: { title: 'Quests' },
  },
  {
    path: '**',
    redirectTo: '',
    data: { title: 'Not Found' },
  },
];
