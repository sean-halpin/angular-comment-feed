import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedComment } from 'src/models/comment';
import { CommentService } from '../comment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css'],
})
export class CommentEditComponent implements OnInit {
  comment!: FeedComment;
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getComment();
  }

  getComment() {
    const id = this.route.snapshot.paramMap.get('id');
    const maybeComment = this.commentService.getComments().find((c) => {
      return c.id == Number(id);
    });
    if (maybeComment) {
      this.comment = maybeComment;
    }
  }

  save() {
    this.commentService.update(this.comment);
    this.location.back();
  }
}
