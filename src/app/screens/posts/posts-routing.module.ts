import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommentFormCanDeactivateGuard } from "../../guards/unsaved-changes.guard";
import { DetailsViewComponent } from "./details-view/details-view.component";
import { ListViewComponent } from "./list-view/list-view.component";

import { PostsComponent } from "./posts.component";

const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
  },
  {
    path: "list",
    component: ListViewComponent,
  },

  {
    path: "details/:_id",
    component: DetailsViewComponent,
    canDeactivate: [CommentFormCanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
