import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from '../src/hello-world.component';
import { BpmClientComponentModule } from '../src';

describe('bpm-client-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BpmClientComponentModule.forRoot()]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<
      HelloWorldComponent
    > = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal(
      'Hello world from the bpm client component module!'
    );
  });
});
