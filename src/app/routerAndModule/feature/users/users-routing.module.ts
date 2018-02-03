import { UsersGuardService } from './guards/users-guard.service';
import { UsersListComponent } from './/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolver } from '@routerAndModule/feature/users/users-resolver';

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'all', component: UsersListComponent, resolve: {'users': UsersResolver}},
  {path: ':id', component: UsersListComponent, canActivate: [UsersGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
