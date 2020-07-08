import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-info-about-user',
  templateUrl: './info-about-user.component.html',
  styleUrls: ['./info-about-user.component.css']
})
export class InfoAboutUserComponent implements OnInit {

  posts: Post[];


  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostsOfUsers(value.id).subscribe(data => this.posts = data);
    });
  }

}
