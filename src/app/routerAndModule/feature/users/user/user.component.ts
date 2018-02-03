import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<a [routerLink]="['/users', user.id ]">{{user.id}}: {{user.name}}</a>`
})
export class UserComponent implements OnInit {

  @Input()
  user: {
    id: number,
    name: string
  };

  constructor() { }

  ngOnInit() {
  }

}
