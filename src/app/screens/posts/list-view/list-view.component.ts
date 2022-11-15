import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { getPosts } from "../../../store/actions/post.action";
import { posts } from "src/app/store/selectors/post.selector";
import { AppState } from "src/app/store/state/app.state";

@Component({
  selector: "app-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.scss"],
})
export class ListViewComponent implements OnInit {
  postList$ = this._store.pipe(select(posts));

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.showPostsList();
  }

  showPostsList() {
    this._store.dispatch(getPosts());
  }
}
