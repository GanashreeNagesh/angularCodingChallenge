import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { IPostState } from '../state/post.state';

const postList = (state: AppState) => state.result;

export const posts = createSelector(
  postList,
  (state: IPostState) => state.result['result']
);
