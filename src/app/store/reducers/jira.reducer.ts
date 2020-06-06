import {Action, createReducer, on} from '@ngrx/store';
import * as jiraAction from '../actions/jira.actions';

export interface IJira {
  isLoading: boolean;
  total: number;
  startAt: number;
  maxResults: number;
  feature: IFeature[];
}

export interface IFeature {
  key: string;
  summary: string;
  created: string;
  histories: IHistories[];
}

export interface IHistories {
  created: string;
  from: string;
  to: string;
}

const initJira: IJira = {
  isLoading: false,
  total: 0,
  startAt: 0,
  maxResults: 0,
  feature: null
};

const reducer = createReducer(
  initJira,
  on(jiraAction.fetchJira, state => ({
    ...state,
    isLoading: true
  })),
  on(jiraAction.fetchedJira, (state, {jira}) => ({
    ...state,
    isLoading: false,
    total: jira.total,
    startAt: jira.startAt,
    maxResults: jira.maxResults,
    feature: jira.feature
  }))
);

export function jiraReducer(state: IJira | undefined, action: Action): IJira {
  return reducer(state, action);
}
