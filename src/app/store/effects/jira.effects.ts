import {Actions, createEffect, ofType} from '@ngrx/effects';
import {JiraService} from '../../jira/jira.service';
import {Injectable} from '@angular/core';
import * as jiraAction from '../actions/jira.actions';
import {map, switchMap} from 'rxjs/operators';
import * as jiraSelectors from '../selectors/jira.selectors';
import {Store} from '@ngrx/store';

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
        this.jiraService.getJira(this.store$.select(jiraSelectors.getStartAt), this.store$.select(jiraSelectors.getMaxResults)).pipe(
          map(jira => jiraAction.fetchedJira({
            jira
          }))
        )
      )
    ));
}
