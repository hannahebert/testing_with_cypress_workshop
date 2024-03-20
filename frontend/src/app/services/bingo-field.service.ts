import {Injectable} from '@angular/core';
import {BingoField} from "../model/bingo-field.data";
import {BingoCategory} from "../model/bingo-category.enum";

@Injectable({
  providedIn: 'root'
})
export class BingoFieldService {

  private fields: BingoField[] = [
    {id: 0, text: "Suche nach WLAN Passwort"},
    {id: 1, text: "Mikro fällt aus"},
    {id: 2, text: "Im Hotel verlaufen"},
    {id: 3, text: "Buzzword fällt"},
    {id: 4, text: "Live-Demo funktioniert nicht wie geplant"},
    {id: 5, text: ">5 Kaffee"},
    {id: 6, text: "Ausversehen in der 'falschen' Session"},
    {id: 7, text: "Als Frage formulierte Aussage"},
    {id: 8, text: "Kurz abgeschweift - Faden verloren."},
    {id: 9, text: "Werbegeschenk eingheimst"},
    {id: 10, text: "Aufkleber eingesammelt"},
    {id: 11, text: ""},
    {id: 12, text: ""},
    {id: 13, text: ""},
    {id: 14, text: ""},
    {id: 15, text: ""},
    {id: 16, text: ""},
    {id: 17, text: ""},
    {id: 18, text: ""},
    {id: 19, text: ""},
    {id: 20, text: ""},
    {id: 21, text: ""},
    {id: 22, text: ""},
    {id: 23, text: ""},
    {id: 24, text: ""},
  ].map((field: Pick<BingoField, 'id' | 'text'>): BingoField => ({...field, selected: false, category: BingoCategory.OFFICE}));

  public getBingoFields(): BingoField[] {
    return this.fields;
  }
}
