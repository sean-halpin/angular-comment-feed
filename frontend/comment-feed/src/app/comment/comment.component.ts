import { Component, OnInit } from '@angular/core';
import { FeedComment } from 'src/models/comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: FeedComment[] = [];
  constructor(public commentService: CommentService) {
    this.comments = commentService.getComments();
  }

  ngOnInit(): void {}
}
