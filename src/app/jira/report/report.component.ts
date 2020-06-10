import {Component, OnInit} from '@angular/core';
import {JiraFacadeService} from '../../store/jira.facade.service';
import {Observable} from 'rxjs';
import {Feature} from '../jira';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {

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
