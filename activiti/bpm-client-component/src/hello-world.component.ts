import { Component } from '@angular/core';

@Component({
  selector: 'bpm-client-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'bpm client component';
}
