import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlphaTestService } from '../../services/alpha-test.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-alphatestform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alphatestform.component.html',
  styleUrls: ['./alphatestform.component.scss'],
})
export class AlphatestformComponent {
  @Input() isSubmitted = false;
  email = '';
  consent = false;
  isLoading = false;

  constructor(public alphaTestService: AlphaTestService) {}

  submitForm() {
    if (!this.email || !this.consent) {
      alert('Пожалуйста, введите email и согласитесь на обработку данных.');
      return;
    }

    this.isLoading = true;

    this.alphaTestService.submitRequest(this.email).subscribe({
      next: () => {
        alert('Заявка отправлена успешно!');
        this.isLoading = false;
        this.email = ''; // Очистить поле после отправки
        this.consent = false; // Сбросить согласие
      },
      error: () => {
        alert('Ошибка при отправке заявки.');
        this.isLoading = false;
      },
    });
  }
}
