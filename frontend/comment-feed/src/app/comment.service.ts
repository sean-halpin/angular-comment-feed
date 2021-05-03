import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments: string[] = [];
  constructor() {
    this.comments.push('Sample Comment 1');
    this.comments.push('Sample Comment 2');
  }

  getComments() {
    return this.comments;
  }
}
