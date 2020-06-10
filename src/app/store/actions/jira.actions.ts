import {createAction, props} from '@ngrx/store';
import {Jira} from '../../jira/jira';

export const fetchJira = createAction('[Jira] init fetch');
export const fetchMoreJIra = createAction('[Jira] load fetch jira', props<{jira: Jira}>());
export const fetchedJira = createAction('[Jira] fetched', props<{jira: Jira}>());
