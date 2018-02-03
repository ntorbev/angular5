import { Injectable } from '@angular/core';

class User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  private _users: User[] = [
    {id: 1, name: 'angular2'},
    {id: 2, name: 'angular5'},
    {id: 3, name: 'angularNext'}
  ];

  get users(): User[] {
    return this._users;
  }

   getById(id: number): User {
    return this._users.find((user: User) => user.id === id);
  }

  addUser(value: User) {
    this._users.push(value);
  }
}
