import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskPanelComponent} from "./task-panel/task-panel.component";
import {TaskFormComponent} from "./task-form/task-form.component";


const COMPONENTS = [TaskPanelComponent, TaskFormComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class CamundaBpmClientComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CamundaBpmClientComponentModule
    };
  }
}
