import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../core/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  template: `
    <app-title [title]="'UserListComponent Title'" [bckgColor]="'blue'"></app-title>
    <h3 *ngFor="let user of users">
      <a [routerLink]="[ '/users', user?.id ]">{{user.name}}</a>
    </h3>
    <input type="text" #i>
    <button (click)="addUser(i.value)">Add User</button>
    <h2>the active use is: {{activeUser?.name}}</h2>`
})
export class UsersListComponent implements OnInit {
  users;
  activeUser;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.users = this.activatedRoute.snapshot.data['users'];
    this.users = this.usersService.users;

    this.route.params.subscribe(params => {
      const id: number = +params['id'];

      this.activeUser = this.usersService.getById(id);
    });
  }

  addUser(name) {
    const id = this.users.length + 1;

    this.usersService.addUser({id: id, name: name});
  }

}
