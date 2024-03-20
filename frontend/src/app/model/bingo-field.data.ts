import {BingoCategory} from "./bingo-category.enum";

export interface BingoField {
  id: number;
  text: string;
  category: BingoCategory;
  selected: boolean;
}
