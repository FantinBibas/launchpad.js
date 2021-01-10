import {Component, Input, OnInit} from '@angular/core';
import {ControllerService} from '../../services/controller.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input()
  // @ts-ignore
  device: WebMidi.MIDIPort;

  @Input()
  currentScene: number[][] = [];

  constructor(
    private controllerService: ControllerService
  ) {
  }

  ngOnInit(): void {
  }

  getColor(code: number): {r: number, g: number, b: number, a: number} {
    return this.controllerService.colorCodes[code];
  }
}
