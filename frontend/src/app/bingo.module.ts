import { NgModule } from '@angular/core';
import {BingoBoardComponent} from "./bingo-board/bingo-board.component";
import {BingoFieldComponent} from "./bingo-field/bingo-field.component";
import {NgFor, NgIf} from "@angular/common";

@NgModule({
  declarations: [BingoBoardComponent, BingoFieldComponent],
  imports: [
    NgIf,
    NgFor
  ],
  exports: [
    BingoBoardComponent
  ]
})
export class BingoModule {}
