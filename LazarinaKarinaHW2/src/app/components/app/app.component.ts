import { Component } from '@angular/core';
import {Post} from "../../models/post/post";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../servses/post/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[];

  constructor(private postServise: PostService) {
    postServise.getPosts().subscribe(value => this.posts = value);
  }
}
