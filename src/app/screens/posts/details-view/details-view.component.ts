import { Component, HostListener, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, CanDeactivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Post } from "src/app/interfaces/post.interface";

import { PostingsService } from "src/app/services/postings.service";
import { ComponentCanDeactivate } from "../../../guards/unsaved-changes.guard";

@Component({
  selector: "app-details-view",
  templateUrl: "./details-view.component.html",
  styleUrls: ["./details-view.component.scss"],
})
export class DetailsViewComponent implements OnInit, ComponentCanDeactivate {
  postFormGroup: FormGroup;
  post_id: string;
  post$: Observable<Post>;
  private _submitClicked = false;

  constructor(
    private actRoute: ActivatedRoute,
    private postService: PostingsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.post_id = this.actRoute.snapshot.params["_id"];
  }

  ngOnInit(): void {
    this.loadCommentForm();
    this.showPost();
  }

  loadCommentForm() {
    this.postFormGroup = this.fb.group({
      comment: [""],
    });
  }

  async showPost() {
    this.postService.getPost(this.post_id).subscribe((data) => {
      this.post$ = data["result"];
    });
  }

  submit() {
    this._submitClicked = true;
    this.postFormGroup.reset();
    this.router.navigate(["/feed"]);
  }

  @HostListener("window:beforeunload")
  canDeactivate(): Observable<boolean> | boolean {
    return this._submitClicked;
  }
}
