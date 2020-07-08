import { Component, OnInit } from '@angular/core';
import {Comment} from '../../models/comment';
import {CommentService} from '../../servises/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) {
    commentService.getAllComments().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }

}
