import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">
      <!-- История игры секция -->
      <section class="content-section main-content">
        <h2>История игры</h2>
        <p class="description">
          Тут будет история игры (краткое описание сюжета)
        </p>
        <div class="image-container">
          <div class="image-placeholder">
            <span>Тут будет фотография</span>
          </div>
        </div>
      </section>

      <!-- Форма альфа-теста -->
      <section class="content-section alpha-test">
        <div class="alpha-test-content">
          <div class="form-section">
            <h3>Оставьте заявку на альфа тест</h3>
            <div class="form-group">
              <label>Почта (email)</label>
              <input
                type="email"
                placeholder="Введите ваш email"
                class="email-input"
              />
            </div>
            <div class="form-group checkbox">
              <input type="checkbox" id="consent" />
              <label for="consent"
                >Я согласен с обработкой персональных данных</label
              >
            </div>
          </div>
          <div class="images-section">
            <div class="image-placeholder">
              <span>Тут будет фотография</span>
            </div>
            <div class="image-placeholder">
              <span>Тут будет фотография</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .page-container {
        padding: 2rem 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 1400px;
        margin: 0 auto;
      }

      .content-section {
        background-color: rgba(26, 26, 26, 0.95);
        padding: 2rem;
        border-radius: 4px;
        width: 100%;
      }

      .main-content {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }

      h2,
      h3 {
        color: #4c8217;
        margin-bottom: 1rem;
        font-weight: normal;
      }

      .description {
        color: #4c8217;
        margin-bottom: 1rem;
        max-width: 60%;
      }

      .image-container {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: auto;
      }

      .image-placeholder {
        background-color: #e0e0e0;
        aspect-ratio: 1;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;
        font-size: 0.9rem;
      }

      .alpha-test-content {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
      }

      .form-section {
        flex: 1;
        max-width: 60%;
      }

      .images-section {
        display: flex;
        gap: 1rem;
      }

      .form-group {
        margin-bottom: 1rem;
      }

      .form-group label {
        display: block;
        color: #4c8217;
        margin-bottom: 0.5rem;
      }

      .email-input {
        width: 100%;
        padding: 0.5rem;
        background-color: rgba(26, 26, 26, 0.8);
        border: 1px solid #4c8217;
        color: #4c8217;
      }

      .checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .checkbox input {
        margin: 0;
      }

      .checkbox label {
        margin: 0;
        font-size: 0.9rem;
        color: #4c8217;
      }
    `,
  ],
})
export class HomeComponent {}
