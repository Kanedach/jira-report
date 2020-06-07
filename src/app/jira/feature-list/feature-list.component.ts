import {Component, OnInit} from '@angular/core';
import {JiraFacadeService} from '../../store/jira.facade.service';
import {Observable} from 'rxjs';
import {Feature} from '../jira';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.sass']
})
export class FeatureListComponent implements OnInit {

  feature: Observable<Feature[]>;
  total: Observable<number>;
  startAt: Observable<number>;
  maxResults: Observable<number>;
  isInitLoading: Observable<boolean>;
  loadingItem: number[] = [0, 1, 2, 3, 4];

  constructor(private jiraFacadeService: JiraFacadeService) {
    this.feature = this.jiraFacadeService.jiraUI.getFeature;
    this.startAt = this.jiraFacadeService.jiraUI.getStartAt;
    this.maxResults = this.jiraFacadeService.jiraUI.getMaxResults;
    this.isInitLoading = this.jiraFacadeService.jiraUI.isLoading;
  }

  ngOnInit(): void {
    this.jiraFacadeService.jiraUI.fetchJira();
  }

}
