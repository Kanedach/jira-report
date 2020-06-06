import { Component, OnInit } from '@angular/core';
import {JiraFacadeService} from '../../store/jira.facade.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.sass']
})
export class FeatureListComponent implements OnInit {

  constructor(private jiraFacadeService: JiraFacadeService) { }

  ngOnInit(): void {
    this.jiraFacadeService.jiraUI.fetchJira();
  }

}
