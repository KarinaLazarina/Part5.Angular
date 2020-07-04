import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Post} from "../../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPostsOfUser(userId): Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
