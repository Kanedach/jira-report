import {Component, OnInit} from '@angular/core';
import {JiraFacadeService} from '../store/jira.facade.service';
import {Observable} from 'rxjs';
import {Feature} from '../jira/jira';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  jql: Observable<string>;
  feature: Observable<Feature[]>;

  constructor(private jiraFacadeService: JiraFacadeService) {
    this.jql = this.jiraFacadeService.jiraUI.getJql;
    this.feature = this.jiraFacadeService.jiraUI.getFeature;
  }

  ngOnInit(): void {

  }

}
