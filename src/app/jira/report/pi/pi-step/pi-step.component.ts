import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pi-step',
  templateUrl: './pi-step.component.html',
  styleUrls: ['./pi-step.component.sass']
})
export class PiStepComponent implements OnInit {

  @Input() fixVersion: History;
  @Input() created: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
