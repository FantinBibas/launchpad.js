import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MidiService {
  errorString?: string;
  // @ts-ignore
  access?: WebMidi.MIDIAccess;

  constructor() {
    // @ts-ignore
    if (!navigator.requestMIDIAccess) {
      this.errorString = 'Navigator incompatible with MIDI feature';
    } else {
      // @ts-ignore
      navigator.requestMIDIAccess()
        // @ts-ignore
        .then((access: WebMidi.MIDIAccess) => {
          console.log('Got access');
          console.log(access);
          this.access = access;
        })
        .catch((error: Error) => {
          console.error(error);
          this.errorString = 'Error while requesting MIDI access';
        });
    }
  }

  get error(): string | undefined {
    return this.errorString;
  }

  // @ts-ignore
  get inputs(): WebMidi.MIDIInputMap | null {
    if (!this.access) {
      return null;
    }
    return this.access.inputs;
  }

  // @ts-ignore
  get output(): WebMidi.MIDIOutputMap | null {
    if (!this.access) {
      return null;
    }
    return this.access.outputs;
  }
}
