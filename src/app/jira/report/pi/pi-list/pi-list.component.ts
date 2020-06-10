import {Component, Input, OnInit} from '@angular/core';
import {Feature} from '../../../jira';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pi-list',
  templateUrl: './pi-list.component.html',
  styleUrls: ['./pi-list.component.sass']
})
export class PiListComponent implements OnInit {

  @Input() feature: Observable<Feature>;
  @Input() isLoading: Observable<boolean>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
