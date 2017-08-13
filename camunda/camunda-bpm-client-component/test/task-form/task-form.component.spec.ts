import {ComponentFixture, TestBed} from '@angular/core/testing';
import {expect} from 'chai';
import {CamundaBpmClientComponentModule} from '../../src';
import {TaskFormComponent} from "../../src/task-form/task-form.component";

describe('bpm-client-task-form component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CamundaBpmClientComponentModule.forRoot()]
    });
  });

  it('should display current task form with action button given task detail', () => {
    const fixture: ComponentFixture<TaskFormComponent> = TestBed.createComponent(TaskFormComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal(
      ''
    );
  });
});
