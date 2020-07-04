import { Component, OnInit, Input } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../servises/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  LoadPosts(userId): void{
    this.userService.getPostsOfUser(userId).subscribe(value => console.log(value));
  }


}
