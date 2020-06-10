import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Feature} from '../jira/jira';
import {JiraFacadeService} from '../store/jira.facade.service';

@Component({
  selector: 'app-pi-list',
  templateUrl: './pi-list.component.html',
  styleUrls: ['./pi-list.component.sass']
})
export class PiListComponent implements OnInit {
  feature: Observable<Feature[]>;

  constructor(private jiraFacadeService: JiraFacadeService) {
    this.feature = this.jiraFacadeService.jiraUI.getFeature;
  }

  ngOnInit(): void {

  }

}
