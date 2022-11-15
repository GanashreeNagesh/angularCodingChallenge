import { Post } from '../../interfaces/post.interface';

export interface IPostState {
  result: Post[];
}

export const initialState: IPostState = { result: [] };
