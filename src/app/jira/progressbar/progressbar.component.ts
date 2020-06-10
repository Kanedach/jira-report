import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass']
})
export class ProgressbarComponent implements OnInit {

  @Input() progress: Observable<number>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
