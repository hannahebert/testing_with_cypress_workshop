import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-bingo-field',
  templateUrl: './bingo-field.component.html',
  styleUrls: ['./bingo-field.component.scss'],
})
export class BingoFieldComponent {
  @Input() public text: string | undefined;
  @Output() toggleSelected: EventEmitter<void> = new EventEmitter<void>();
  selected: boolean = false;

  onClick() {
    this.selected = !this.selected;
    this.toggleSelected.emit();
  }
}
