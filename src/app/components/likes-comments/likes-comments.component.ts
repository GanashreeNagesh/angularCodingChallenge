import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-comments',
  templateUrl: './likes-comments.component.html',
  styleUrls: ['./likes-comments.component.scss']
})
export class LikesCommentsComponent implements OnInit {
  @Input() counts;
  @Input() postedTime;
  constructor() {}

  ngOnInit(): void {}
}
