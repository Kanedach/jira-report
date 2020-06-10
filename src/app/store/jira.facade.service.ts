import {Injectable} from '@angular/core';
import {IJira} from './reducers/jira.reducer';
import {Store} from '@ngrx/store';
import {fetchJira} from './actions/jira.actions';
import {Observable} from 'rxjs';
import * as jiraSelector from './selectors/jira.selectors';
import {Feature} from '../jira/jira';

@Injectable({
  providedIn: 'root'
})
export class JiraFacadeService {

  constructor(private store$: Store<IJira>) {
  }

  public get jiraUI() {
    return {
      fetchJira: (): void => this.store$.dispatch(fetchJira()),
      isLoading: ((): Observable<boolean> => this.store$.select(jiraSelector.isInitLoading))(),
      getStartAt: ((): Observable<number> => this.store$.select(jiraSelector.getStartAt))(),
      getMaxResults: ((): Observable<number> => this.store$.select(jiraSelector.getMaxResults))(),
      getFeature: ((): Observable<Feature[]> => this.store$.select(jiraSelector.getFeature))(),
      getProgress: ((): Observable<number> => this.store$.select(jiraSelector.getProgress))()
    };
  }
}
