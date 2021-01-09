import { Component } from '@angular/core';
import {MidiService} from './services/midi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  output?: string;
  x = 0;
  y = 0;
  color = 0;

  constructor(
    public midiService: MidiService
  ) {
  }

  chooseOutput(output: string): void {
    this.output = output;
  }

  write(): void {
    if (this.output) {
      this.midiService.writeColorToPosition(this.output, this.x, this.y, this.color);
    }
  }

  reset(): void {
    if (this.output) {
      this.midiService.writeToOutput(this.output, [176, 0, 0]);
    }
  }
}
