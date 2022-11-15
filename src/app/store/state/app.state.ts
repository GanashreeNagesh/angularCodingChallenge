import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { postReducer } from '../reducers/post.reducer';
import { IPostState } from './post.state';

export interface AppState {
  result: IPostState;
}
export const reducers: ActionReducerMap<AppState> = {
  result: postReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    return reducer(state, action);
  };
}
