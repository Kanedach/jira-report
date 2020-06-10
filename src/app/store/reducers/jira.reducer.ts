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
  status: string;
  state: IHistories[];
  fixVersion: IHistories[];
}

export interface IHistories {
  created: string;
  from: string;
  to: string;
}

const initJira: IJira = {
  isLoading: false,
  total: null,
  startAt: 0,
  maxResults: 20,
  feature: null
};

const reducer = createReducer(
  initJira,
  on(jiraAction.fetchJira, state => ({
    ...state,
    isLoading: true
  })),
  on(jiraAction.fetchMoreJIra, (state, {jira}) => ({
    ...state,
    maxResults: jira.maxResults,
    startAt: jira.startAt,
    total: jira.startAt,
    feature:  state.feature.concat(jira.feature),
    isLoading: false,
  })),
  on(jiraAction.fetchedJira, (state, {jira}) => ({
    ...state,
    maxResults: jira.maxResults,
    startAt: jira.startAt,
    total: jira.startAt,
    feature:  state.feature.concat(jira.feature),
    isLoading: false,
  }))
);

export function jiraReducer(state: IJira | undefined, action: Action): IJira {
  return reducer(state, action);
}
