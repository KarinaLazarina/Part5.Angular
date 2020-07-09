import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-info-about-post',
  templateUrl: './info-about-post.component.html',
  styleUrls: ['./info-about-post.component.css']
})
export class InfoAboutPostComponent implements OnInit {

  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    activatedRoute.params.subscribe(value => {
      commentService.getCommentsOfPosts(value.id).subscribe(data => this.comments = data);
    });
  }

  ngOnInit(): void {
  }

}
