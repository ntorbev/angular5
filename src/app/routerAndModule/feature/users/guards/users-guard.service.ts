import { UsersService } from '../../../core/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UsersGuardService implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = +route.params.id;

    if (!this.usersService.getById(id)) {
      this.router.navigate(['/home']);
    }
    return !!this.usersService.getById(id);
  }

}
