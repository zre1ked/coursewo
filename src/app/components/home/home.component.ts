import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlphatestformComponent } from '../alphatestform/alphatestform.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AlphatestformComponent],
  templateUrl: `./home.component.html`,
  styleUrls: [`./home.component.scss`],
})
export class HomeComponent {}
