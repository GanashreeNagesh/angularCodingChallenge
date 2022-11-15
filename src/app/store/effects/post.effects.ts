import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { PostingsService } from 'src/app/services/postings.service';
import { getPosts, getPostsSucess } from '../actions/post.action';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.action$.pipe(
      ofType(getPosts),
      exhaustMap(() =>
        this.postService
          .getPostList()
          .pipe(map((result) => getPostsSucess({ result: result })))
      )
    )
  );
  constructor(private action$: Actions, private postService: PostingsService) {}
}
