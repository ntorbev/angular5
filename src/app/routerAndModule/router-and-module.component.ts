import { Component, OnInit } from '@angular/core';
import { UsersService } from './core/users.service';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="[ '/home' ]">home</a>
    <a [routerLink]="[ '/users/all' ]">All Users</a>
    <router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit {
  users;

  title = 'app';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.users;
  }

}
