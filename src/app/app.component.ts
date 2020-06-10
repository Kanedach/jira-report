import {Component} from '@angular/core';
import {JiraFacadeService} from './store/jira.facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private jiraFacadeService: JiraFacadeService) {
    this.jiraFacadeService.jiraUI.fetchJira();
  }

}
