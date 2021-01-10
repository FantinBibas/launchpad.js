import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-launchpad-button',
  templateUrl: './launchpad-button.component.html',
  styleUrls: ['./launchpad-button.component.scss']
})
export class LaunchpadButtonComponent implements OnInit {
  @Input()
  color?: { r: number, g: number, b: number, a: number };

  @Input()
  type?: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
