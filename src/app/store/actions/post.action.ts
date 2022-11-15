import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';

export const getPosts = createAction('[Post] Get Posts');
export const getPostsSucess = createAction(
  '[Post] Get Posts Success',
  props<{ result: Post[] }>()
);
