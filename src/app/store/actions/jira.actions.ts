import {createAction, props} from '@ngrx/store';
import {Jira} from '../../jira/jira';

export const fetchJira = createAction('[Jira] fetch');
export const fetchedJira = createAction('[Jira] fetched', props<{jira: Jira}>());
