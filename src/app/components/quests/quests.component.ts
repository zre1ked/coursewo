import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlphatestformComponent } from '../alphatestform/alphatestform.component';

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [CommonModule, FormsModule, AlphatestformComponent],
  templateUrl: `./quests.component.html`,
  styleUrls: ['./quests.component.scss'],
})
export class QuestsComponent {}
