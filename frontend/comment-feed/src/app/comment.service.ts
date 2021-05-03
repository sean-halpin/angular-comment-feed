import { Injectable } from '@angular/core';
import { FeedComment } from 'src/models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments: FeedComment[] = [];
  constructor() {
    this.comments.push({
      id: 1,
      text: 'Sample Comment 1',
      location: '',
      time: 0,
      author: '',
    });
    this.comments.push({
      id: 2,
      text: 'Sample Comment 2',
      location: '',
      time: 0,
      author: '',
    });
  }

  getComments() {
    return this.comments;
  }

  update(comment: FeedComment) {
    const commentIndex = this.comments.findIndex((obj) => obj.id == comment.id);
    this.comments[commentIndex] = comment;
  }
}
