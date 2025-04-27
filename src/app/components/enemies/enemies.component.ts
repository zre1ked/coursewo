import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlphatestformComponent } from '../alphatestform/alphatestform.component';

@Component({
  selector: 'app-enemies',
  standalone: true,
  imports: [CommonModule, FormsModule, AlphatestformComponent],
  templateUrl: `./enemies.component.html`,
  styleUrls: [`./enemies.component.scss`],
})
export class EnemiesComponent {}
