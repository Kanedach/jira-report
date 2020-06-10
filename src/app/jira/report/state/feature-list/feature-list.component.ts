import {Component, Input, OnInit} from '@angular/core';
import {JiraFacadeService} from '../../../../store/jira.facade.service';
import {Observable} from 'rxjs';
import {Feature} from '../../../jira';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.sass']
})
export class FeatureListComponent implements OnInit {

  @Input() feature: Observable<Feature>;
  @Input() isLoading: Observable<boolean>;

  constructor() {
  }

  ngOnInit(): void {

  }

}
