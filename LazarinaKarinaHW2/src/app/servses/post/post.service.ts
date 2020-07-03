import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../models/post/post";
import {Observable} from "rxjs";
import {Comment} from "../../models/comment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  getComments(postId): Observable<Comment[]>{
    return this.http.get<Comment[]>(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
