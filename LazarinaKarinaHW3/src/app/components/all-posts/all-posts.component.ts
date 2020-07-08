import { Component, OnInit } from '@angular/core';
import {PostService} from '../../servises/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent{

  posts: Post[];

  constructor(private postService: PostService) {
    postService.getAllPosts().subscribe(value => this.posts = value);
  }

}
