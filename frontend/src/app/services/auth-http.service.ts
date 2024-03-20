import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  private apiUrl = 'http://127.0.0.1:4000/api/v1';

  constructor(private readonly http: HttpClient,
              private readonly router: Router) {}

  login(username: string, password: string): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/login`, {
      username, password,
    })
    .pipe(
      mergeMap(() => this.router.navigate(['/bingo-board']))
    );
  }

  logout(): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/logout`, {})
      .pipe(
        mergeMap(() => this.router.navigate(['/login']))
      );
  }
}
