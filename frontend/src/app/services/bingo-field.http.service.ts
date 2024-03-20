import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BingoField } from '../model/bingo-field.data';
import { BingoCategory } from '../model/bingo-category.enum';


@Injectable({
  providedIn: 'root'
})
export class BingoFieldHttpService {
  private apiUrl = 'http://127.0.0.1:4000/api/v1/bingo-items';

  constructor(private http: HttpClient) { }

  getBingoItems(): Observable<BingoField[]> {
    return this.http.get<BingoField[]>(this.apiUrl);
  }

  getBingoItemsByCategory(category: BingoCategory): Observable<BingoField[]> {
    return this.http.get<BingoField[]>(`${this.apiUrl}/${category}`);
  }
}
