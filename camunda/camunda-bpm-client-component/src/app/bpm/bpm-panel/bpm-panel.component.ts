import {Component, Input, OnInit} from '@angular/core';
import * as camunda from 'camunda-bpm-sdk-js/index.js';

@Component({
  selector: 'bpm-client-bpm-panel',
  templateUrl: './bpm-panel.component.html',
  styleUrls: ['./bpm-panel.component.css']
})
export class BpmPanelComponent implements OnInit {
  @Input()
  processInstanceId: string;
  @Input()
  processDefinitionKey: string;

  constructor() {
  }

  ngOnInit() {
    const processDefinitionService = camunda.Client({apiUri: '/rest', mock: false}).resources('process-definition');
  }

}
