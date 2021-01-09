import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DeviceComponent} from './components/device/device.component';
import {FormsModule} from '@angular/forms';
import { PaletteComponent } from './components/palette/palette.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    PaletteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
