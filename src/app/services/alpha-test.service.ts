import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlphaTestService {
  private apiUrl = 'http://localhost:3000/alphaRequests';
  private isSubmittedSubject = new BehaviorSubject<boolean>(false);
  public isSubmitted$ = this.isSubmittedSubject.asObservable();

  constructor(private http: HttpClient) {}

  submitRequest(data: any): Observable<any> {
    const requestData = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    return this.http.post(this.apiUrl, requestData).pipe(
      tap(() => this.markAsSubmitted()),
      delay(1000)
    );
  }

  private markAsSubmitted(): void {
    this.isSubmittedSubject.next(true);
    localStorage.setItem('alphaSubmitted', 'true');
  }

  checkSubmission(): void {
    const savedState = localStorage.getItem('alphaSubmitted') === 'true';
    this.isSubmittedSubject.next(savedState);
  }
}
