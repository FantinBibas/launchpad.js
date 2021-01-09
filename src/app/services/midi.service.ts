import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MidiService {
  colors = [
    {r: 0, g: 0, b: 0, a: 0, code: 0},
    {r: 255, g: 0, b: 0, a: .3, code: 1},
    {r: 255, g: 0, b: 0, a: .6, code: 2},
    {r: 255, g: 0, b: 0, a: 1, code: 3},
    {r: 0, g: 255, b: 0, a: .3, code: 16},
    {r: 255, g: 128, b: 0, a: .3, code: 17},
    {r: 255, g: 128, b: 0, a: .6, code: 18},
    {r: 255, g: 85, b: 0, a: 1, code: 19},
    {r: 0, g: 255, b: 0, a: .6, code: 32},
    {r: 128, g: 255, b: 0, a: .6, code: 33},
    {r: 255, g: 255, b: 0, a: .6, code: 34},
    {r: 255, g: 128, b: 0, a: 1, code: 35},
    {r: 0, g: 255, b: 0, a: 1, code: 48},
    {r: 85, g: 255, b: 0, a: 1, code: 49},
    {r: 128, g: 255, b: 0, a: 1, code: 50},
    {r: 255, g: 255, b: 0, a: 1, code: 51}
  ];
  errorString?: string;
  // @ts-ignore
  inputs: WebMidi.MIDIInput[] = [];
  // @ts-ignore
  outputs: WebMidi.MIDIOutput[] = [];

  constructor() {
    // @ts-ignore
    if (!navigator.requestMIDIAccess) {
      this.errorString = 'Navigator incompatible with MIDI feature';
    } else {
      // @ts-ignore
      navigator.requestMIDIAccess()
        // @ts-ignore
        .then((access: WebMidi.MIDIAccess) => {
          if (access) {
            this.inputs = [];
            for (const device of access.inputs.values()) {
              this.inputs.push(device);
            }
            this.outputs = [];
            for (const device of access.outputs.values()) {
              this.outputs.push(device);
            }
          }
          // @ts-ignore
          access.onstatechange = (event: WebMidi.MIDIConnectionEvent) => {
            const device = event.port;
            if (device.type === 'output') {
              if (device.state === 'connected') {
                this.outputs.push(device);
              } else {
                this.outputs = this.outputs.filter(output => output.id !== device.id);
              }
            } else {
              if (device.state === 'connected') {
                this.inputs.push(device);
              } else {
                this.inputs = this.inputs.filter(input => input.id !== device.id);
              }
            }
          };
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

  writeToOutput(id: string, data: number[]): void {
    this.outputs
      .filter(device => device.id === id)
      .forEach(device => device.send(data));
  }

  writeColorToPosition(x: number, y: number, color: number): void {
  }
}
