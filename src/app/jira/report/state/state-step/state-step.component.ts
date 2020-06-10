import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-state-step',
  templateUrl: './state-step.component.html',
  styleUrls: ['./state-step.component.sass']
})
export class StateStepComponent implements OnInit {

  @Input() history: History;
  @Input() created: string;
  @Input() dateNewState: History;

  constructor() {
  }

  ngOnInit(): void {
  }

}
