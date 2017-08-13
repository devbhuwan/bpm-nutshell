import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CamundaBpmClientComponentModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, CamundaBpmClientComponentModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
