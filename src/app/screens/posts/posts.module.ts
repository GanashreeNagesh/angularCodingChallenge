import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts.component";
import { ListViewComponent } from "./list-view/list-view.component";
import { DetailsViewComponent } from "./details-view/details-view.component";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { LikesCommentsComponent } from "src/app/components/likes-comments/likes-comments.component";
import { UserDetailsComponent } from "src/app/components/user-details/user-details.component";
import { CaptionComponent } from "src/app/components/caption/caption.component";
import { PostImageComponent } from "src/app/components/post-image/post-image.component";
import { PostedDateComponent } from "src/app/components/posted-date/posted-date.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShortNumberPipe } from "src/app/pipes/short-number.pipe";

@NgModule({
  declarations: [
    PostsComponent,
    ListViewComponent,
    DetailsViewComponent,
    LikesCommentsComponent,
    UserDetailsComponent,
    CaptionComponent,
    PostImageComponent,
    PostedDateComponent,
    ShortNumberPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class PostsModule {}
