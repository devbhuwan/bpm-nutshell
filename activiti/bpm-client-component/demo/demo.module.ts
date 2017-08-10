import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BpmClientComponentModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, BpmClientComponentModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
