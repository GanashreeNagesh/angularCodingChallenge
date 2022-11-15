import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/post.state';
import { getPostsSucess } from '../actions/post.action';

export const postReducer = createReducer(
  initialState,
  on(getPostsSucess, (state, action) => {
    return {
      ...state,
      result: action.result
    };
  })
);
