import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MidiService {
  errorString?: string;
  // @ts-ignore
  access?: WebMidi.MIDIAccess;
  // @ts-ignore
  inputDevices: WebMidi.MIDIInput[] = [];
  // @ts-ignore
  outputDevices: WebMidi.MIDIOutputs[] = [];

  constructor() {
    // @ts-ignore
    if (!navigator.requestMIDIAccess) {
      this.errorString = 'Navigator incompatible with MIDI feature';
    } else {
      // @ts-ignore
      navigator.requestMIDIAccess()
        // @ts-ignore
        .then((access: WebMidi.MIDIAccess) => {
          this.access = access;
          // @ts-ignore
          this.access.onstatechange = (event: WebMidi.MIDIConnectionEvent) => {
            console.log(event);
            this.updateDevices();
          };
          this.updateDevices();
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

  updateDevices(): void {
    if (this.access) {
      this.inputDevices = [];
      for (const device of this.access.inputs.values()) {
        this.inputDevices.push(device);
      }
      this.outputDevices = [];
      for (const device of this.access.outputs.values()) {
        this.outputDevices.push(device);
      }
    }
  }

  // @ts-ignore
  get inputs(): WebMidi.MIDIInput[] {
    return this.inputDevices;
  }

  // @ts-ignore
  get outputs(): WebMidi.MIDIOutput[] {
    return this.outputDevices;
  }

  writeToOutput(id: string): void {
    if (this.outputDevices) {
      this.outputDevices
        .filter(device => device.id === id)
        .forEach(device => device.send([144, 20, 50]));
    }
  }
}
