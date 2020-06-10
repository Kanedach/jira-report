import {Actions, createEffect, ofType} from '@ngrx/effects';
import {JiraService} from '../../jira/jira.service';
import {Injectable} from '@angular/core';
import * as jiraAction from '../actions/jira.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import * as jiraSelectors from '../selectors/jira.selectors';
import {Store} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {Jira} from '../../jira/jira';

@Injectable()
export class JiraEffects {

  constructor(
    private actions$: Actions,
    private jiraService: JiraService,
    private store$: Store
  ) {
  }

  public fetchJira = createEffect(() =>
    this.actions$.pipe(
      ofType(jiraAction.fetchJira),
      switchMap(() =>
        this.jiraService.getJira(environment.startAt, environment.maxResultsInit).pipe(
          map(jira => jiraAction.fetchMoreJIra({
            jira
          }))
        )
      )
    ));

  public fetchMoreJira = createEffect(() =>
    this.actions$.pipe(
      ofType(jiraAction.fetchMoreJIra),
      switchMap(({jira}) =>
        this.jiraService.getJira(jira.startAt + jira.maxResults + 1, environment.maxResultsLoad + 1).pipe(
          tap(res => console.log(jira.startAt + jira.maxResults + 1)),
          map((jira) => {
            console.log(jira);
            if (jira.startAt + jira.maxResults >= jira.total) {
              return jiraAction.fetchedJira({jira});
            }
            return jiraAction.fetchMoreJIra({jira});
          })
        )
      )
    ));

}
