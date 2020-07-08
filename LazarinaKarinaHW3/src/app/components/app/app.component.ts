import { Component } from '@angular/core';
import {PostService} from '../../servises/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[];

  constructor(private postService: PostService) {
    postService.getAllPosts().subscribe(value => this.posts = value);
  }
}
