import {Component, OnInit} from '@angular/core';
import {BingoField} from '../model/bingo-field.data';
import {BingoFieldHttpService} from '../services/bingo-field.http.service';
import {BingoCategory} from '../model/bingo-category.enum';
import {AuthHttpService} from '../services/auth-http.service';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.scss'],
})
export class BingoBoardComponent implements OnInit {
  readonly bingoCategoryEnum = BingoCategory;

  fields: BingoField[] = [];
  activeBingoCategory: BingoCategory | null = null;

  constructor(private readonly bingoFieldHttpService: BingoFieldHttpService,
              private readonly authHttpService: AuthHttpService) {
  }

  get fieldsSelected(): boolean {
    return this.fields.filter(field => field.selected).length > 0;
  }

  ngOnInit(): void {
    this.setCategoryAndFetchBingoItems(BingoCategory.OFFICE);
  }

  toggleSelected(index: number): void {
    this.fields[index].selected = !this.fields[index].selected;
  }

  checkForBingo(): boolean {
    // Prüfe Zeilen
    for (let i = 0; i < 5; i++) {
      if (this.fields.slice(i * 5, i * 5 + 5).every(field => field.selected)) {
        return true;
      }
    }

    // Prüfe Spalten
    for (let i = 0; i < 5; i++) {
      if ([0, 1, 2, 3, 4].map(j => this.fields[j * 5 + i]).every(field => field.selected)) {
        return true;
      }
    }

    return false;
  }

  logout(): void {
    this.authHttpService.logout().subscribe();
  }

  shuffle(): void {
    if (!this.fieldsSelected && this.activeBingoCategory) {
      this.fetchBingoItems(this.activeBingoCategory);
    }
  }

  setCategoryAndFetchBingoItems(category: BingoCategory): void {
    if (this.activeBingoCategory !== category) {
      this.activeBingoCategory = category;

      this.fetchBingoItems(category);
    }
  }

  private fetchBingoItems(category: BingoCategory): void {
    this.bingoFieldHttpService.getBingoItemsByCategory(category).subscribe(items => {
      this.fields = items;
    });
  }
}
