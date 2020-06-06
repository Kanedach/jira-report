import {Actions, createEffect, ofType} from '@ngrx/effects';
import {JiraService} from '../../jira/jira.service';
import {Injectable} from '@angular/core';
import * as jiraAction from '../actions/jira.actions';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class JiraEffects {

  constructor(
    private actions$: Actions,
    private jiraService: JiraService
  ) {
  }

  public fetchJira = createEffect(() =>
    this.actions$.pipe(
      ofType(jiraAction.fetchJira),
      switchMap(() =>
        this.jiraService.getInit().pipe(
          map(jira => jiraAction.fetchedJira({
            jira
          }))
        )
      )
    ));
}
