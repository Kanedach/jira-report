import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IJira} from '../reducers/jira.reducer';
import {Feature, Jira} from '../../jira/jira';

export const getJira = createFeatureSelector<IJira>('jira');
export const isInitLoading = createSelector(getJira, (state: IJira): boolean => state.isLoading);
export const getTotal = createSelector(getJira, (state: IJira): number => state.total);
export const getStartAt = createSelector(getJira, (state: IJira): number => {
  if (!state.startAt) {
    return 0;
  }
  return state.startAt;
});
export const getMaxResults = createSelector(getJira, (state: IJira): number => state.maxResults);
export const getFeature = createSelector(getJira, (state: IJira): Feature[] => {
  if (state.feature === null) {
    return null;
  }
  return state.feature;
});
