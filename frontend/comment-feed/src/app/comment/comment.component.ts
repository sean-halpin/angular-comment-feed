import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: string[] = [];
  constructor(public commentService: CommentService) {
    this.comments = commentService.getComments();
  }

  ngOnInit(): void {}
}
