import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.sass']
})
export class ProgressbarComponent implements OnInit {

  @Input() progress: Observable<number>;

  constructor() {
    if (this.progress) {
      this.progress.pipe(map(res => console.log('progress:' + res)));
    }
  }

  ngOnInit(): void {
  }

}
