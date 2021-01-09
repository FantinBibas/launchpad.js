import { Component } from '@angular/core';
import {MidiService} from './services/midi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  output?: string;

  constructor(
    public midiService: MidiService
  ) {
  }

  chooseOutput(selectElement: EventTarget): void {
    this.output = (selectElement as HTMLSelectElement).value;
  }

  write(): void {
    if (this.output) {
      this.midiService.writeToOutput(this.output);
    }
  }
}
