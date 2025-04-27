import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlphatestformComponent } from '../alphatestform/alphatestform.component';

@Component({
  selector: 'app-puzzles',
  standalone: true,
  imports: [CommonModule, FormsModule, AlphatestformComponent],
  templateUrl: `./puzzles.component.html`,
  styleUrls: [`./puzzles.component.scss`],
})
export class PuzzlesComponent {}
