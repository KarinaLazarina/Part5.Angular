import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../servises/comment.service';
import {Comment} from '../../models/comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments-of-post',
  templateUrl: './all-comments-of-post.component.html',
  styleUrls: ['./all-comments-of-post.component.css']
})
export class AllCommentsOfPostComponent implements OnInit {

  commentsOfPost: Comment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(data => {
      commentService.getCommentsOfPost(data.id).subscribe(value => this.commentsOfPost = value);
    });
  }

  ngOnInit(): void {
  }

}
