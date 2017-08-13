import {ComponentFixture, TestBed} from '@angular/core/testing';
import {expect} from 'chai';
import {CamundaBpmClientComponentModule} from '../../src';
import {TaskPanelComponent} from "../../src/task-panel/task-panel.component";

describe('bpm-client-task-panel component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CamundaBpmClientComponentModule.forRoot()]
    });
  });

  it('should display task panel having tasks grid given process instance id', () => {
    const fixture: ComponentFixture<TaskPanelComponent> = TestBed.createComponent(TaskPanelComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal(
      ''
    );
  });
});
