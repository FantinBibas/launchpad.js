import { Component } from '@angular/core';
import {MidiService} from './services/midi.service';
import {ControllerService} from './services/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  output?: string;
  text = '';
  x = 0;
  y = 0;
  color = 0;

  constructor(
    public midiService: MidiService,
    public controllerService: ControllerService
  ) {
  }

  chooseOutput(output: string): void {
    this.output = output;
  }

  write(): void {
    if (this.output) {
      this.controllerService.scrollTextOnGrid(
        this.output,
        this.text,
        this.color
      );
    }
  }

  reset(): void {
    if (this.output) {
      this.midiService.resetColors(this.output);
    }
  }

  lightAll(): void {
    if (this.output) {
      this.midiService.allColors(this.output);
    }
  }
}
