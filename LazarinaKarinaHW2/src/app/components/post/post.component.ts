import { Component, OnInit, Input } from '@angular/core';
import {Post} from "../../models/post/post";
import {PostService} from "../../servses/post/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private postServise: PostService) { }

  ngOnInit(): void {
  }

  showComments(postId): void{
    this.postServise.getComments(postId).subscribe(value => console.log(value));

  }

}
