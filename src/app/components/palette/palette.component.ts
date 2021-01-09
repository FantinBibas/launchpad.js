import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
  @Input()
  colors: {r: number, g: number, b: number, a: number, code: number}[] = [];

  @Output() chooseColor = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
