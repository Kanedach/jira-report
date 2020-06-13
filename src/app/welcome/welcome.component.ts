import {Component, OnInit} from '@angular/core';
import {JiraFacadeService} from '../store/jira.facade.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  jql: Observable<string>;

  constructor(private jiraFacadeService: JiraFacadeService) {
  }

  ngOnInit(): void {
    this.jql = this.jiraFacadeService.jiraUI.getJql;
  }

}
