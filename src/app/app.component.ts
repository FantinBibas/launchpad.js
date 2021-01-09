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

  constructor(
    public midiService: MidiService
  ) {
  }

  chooseOutput(output: string): void {
    this.output = output;
  }

  write(): void {
    if (this.output) {
      this.midiService.writeToOutput(this.output, [176, 0, 0]);
      for (let i = 0; i <= 127; i++) {
        this.midiService.writeToOutput(this.output, [144, i, i]);
      }
    }
  }
}
