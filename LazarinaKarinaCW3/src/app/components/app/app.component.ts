import { Component } from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];

  constructor(private userService: UserService) {
    userService.getUsers().subscribe(value => this.users = value);
  }
}
