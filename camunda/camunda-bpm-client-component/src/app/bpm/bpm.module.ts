import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BpmPanelComponent} from './bpm-panel/bpm-panel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BpmService} from './shared/services/bpm.service';
import {reducers} from './shared/reducers/index';

export const COMPONENTS = [BpmPanelComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bpm', reducers),
    EffectsModule.forFeature([]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class BpmModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BpmModule,
      providers: [BpmService],
    };
  }
}
