import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { GameState } from '../../interfaces/game.interface';
import { TextFormatPipe } from '../../pipes/text-format.pipe';

@Component({
  selector: 'app-game-overview',
  standalone: true,
  imports: [CommonModule, TextFormatPipe],
  template: `
    <div class="overview-container">
      <h1>Обзор игры</h1>

      <div class="game-state">
        <h2>Текущее состояние</h2>
        <div class="state-info">
          <p>Уровень: {{ gameState.currentLevel }}</p>
          <p>Здоровье: {{ gameState.playerHealth }}</p>
          <p>Выполнено заданий: {{ gameState.completedQuests.length }}</p>
          <p>Разгадано головоломок: {{ gameState.unlockedPuzzles.length }}</p>
          <p>Побеждено врагов: {{ gameState.defeatedEnemies.length }}</p>
        </div>
      </div>

      <div class="game-mechanics">
        <h2>Игровая механика</h2>
        <div class="mechanics-content">
          <div class="mechanic-card">
            <h3>Боевая система</h3>
            <p>
              Динамичные сражения в стиле BulletHell с различными типами врагов
              и уникальными паттернами атак.
            </p>
          </div>
          <div class="mechanic-card">
            <h3>Головоломки</h3>
            <p>
              Сложные лабиринты и логические задачи, требующие внимательности и
              сообразительности.
            </p>
          </div>
          <div class="mechanic-card">
            <h3>Система квестов</h3>
            <p>
              Разнообразные задания, включающие боевые миссии, поиск предметов и
              диалоги с NPC.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .overview-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
      }

      h1 {
        color: #2c3e50;
        text-align: center;
        margin-bottom: 2rem;
      }

      .game-state,
      .game-mechanics {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      h2 {
        color: #34495e;
        margin-bottom: 1.5rem;
      }

      .state-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .state-info p {
        padding: 1rem;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .mechanics-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .mechanic-card {
        background-color: white;
        padding: 1.5rem;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .mechanic-card h3 {
        color: #3498db;
        margin-bottom: 1rem;
      }

      .mechanic-card p {
        color: #2c3e50;
        line-height: 1.6;
      }
    `,
  ],
})
export class GameOverviewComponent implements OnInit {
  gameState: GameState = {
    currentLevel: 1,
    playerHealth: 100,
    completedQuests: [],
    unlockedPuzzles: [],
    defeatedEnemies: [],
  };

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGameState().subscribe((state) => {
      this.gameState = state;
    });
  }
}
