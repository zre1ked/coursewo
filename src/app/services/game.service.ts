import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Enemy, Puzzle, Quest, GameState } from "../interfaces/game.interface";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private gameState = new BehaviorSubject<GameState>({
    currentLevel: 1,
    playerHealth: 100,
    completedQuests: [],
    unlockedPuzzles: [],
    defeatedEnemies: [],
  });

  private enemies: Enemy[] = [
    {
      id: 1,
      name: "Маленький жук",
      size: "small",
      description: "Быстрый и проворный противник",
      health: 50,
      damage: 10,
    },
    {
      id: 2,
      name: "Средний жук",
      size: "medium",
      description: "Сбалансированный противник",
      health: 100,
      damage: 20,
    },
    {
      id: 3,
      name: "Большой жук",
      size: "large",
      description: "Медленный, но мощный противник",
      health: 200,
      damage: 30,
    },
  ];

  private puzzles: Puzzle[] = [
    {
      id: 1,
      name: "Травяной лабиринт",
      description: "Сложный лабиринт из высокой травы",
      type: "maze",
      difficulty: "medium",
    },
  ];

  private quests: Quest[] = [
    {
      id: 1,
      title: "Поиск выхода",
      description: "Найти выход из травяного лабиринта",
      type: "maze",
      status: "available",
      reward: "Открытие нового уровня",
    },
    {
      id: 2,
      title: "Защита муравейника",
      description: "Отбить атаку жуков",
      type: "combat",
      status: "available",
      reward: "Улучшение здоровья",
    },
    {
      id: 3,
      title: "Сбор ресурсов",
      description: "Собрать материалы для строительства",
      type: "fetch",
      status: "available",
      reward: "Новые возможности",
    },
    {
      id: 4,
      title: "Переговоры",
      description: "Убедить муравьев в своей полезности",
      type: "speech",
      status: "available",
      reward: "Доступ к новым квестам",
    },
  ];

  constructor(private http: HttpClient) {}

  getGameState(): Observable<GameState> {
    return this.gameState.asObservable();
  }

  updateGameState(newState: Partial<GameState>): void {
    this.gameState.next({ ...this.gameState.value, ...newState });
  }

  getEnemies(): Observable<Enemy[]> {
    return new Observable((observer) => {
      observer.next(this.enemies);
      observer.complete();
    });
  }

  getPuzzles(): Observable<Puzzle[]> {
    return new Observable((observer) => {
      observer.next(this.puzzles);
      observer.complete();
    });
  }

  getQuests(): Observable<Quest[]> {
    return new Observable((observer) => {
      observer.next(this.quests);
      observer.complete();
    });
  }

  completeQuest(questId: number): void {
    const currentState = this.gameState.value;
    if (!currentState.completedQuests.includes(questId)) {
      this.updateGameState({
        completedQuests: [...currentState.completedQuests, questId],
      });
    }
  }

  defeatEnemy(enemyId: number): void {
    const currentState = this.gameState.value;
    if (!currentState.defeatedEnemies.includes(enemyId)) {
      this.updateGameState({
        defeatedEnemies: [...currentState.defeatedEnemies, enemyId],
      });
    }
  }

  unlockPuzzle(puzzleId: number): void {
    const currentState = this.gameState.value;
    if (!currentState.unlockedPuzzles.includes(puzzleId)) {
      this.updateGameState({
        unlockedPuzzles: [...currentState.unlockedPuzzles, puzzleId],
      });
    }
  }
}
