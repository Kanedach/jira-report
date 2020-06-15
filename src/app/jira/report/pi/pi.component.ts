import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Feature} from '../../jira';
import {JiraFacadeService} from '../../../store/jira.facade.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.sass']
})
export class PiComponent implements OnInit {

  feature: Observable<Feature[]>;
  total: Observable<number>;
  startAt: Observable<number>;
  maxResults: Observable<number>;
  isLoading: Observable<boolean>;
  progress: Observable<number>;

  constructor(private jiraFacadeService: JiraFacadeService) {
    this.feature = this.jiraFacadeService.jiraUI.getFeature;
    this.startAt = this.jiraFacadeService.jiraUI.getStartAt;
    this.maxResults = this.jiraFacadeService.jiraUI.getMaxResults;
    this.isLoading = this.jiraFacadeService.jiraUI.isLoading;
    this.progress = this.jiraFacadeService.jiraUI.getProgress;
  }

  ngOnInit(): void {
    this.jiraFacadeService.jiraUI.fetchJira();
  }
}
