import { UsersService } from '../../../core/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  template: `<p> [DETAILS]: {{user.name}} ' + </p>`
})
export class UserDetailsComponent implements OnInit {
  user;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);

    this.user = this.usersService.getById(id);
  }

}
