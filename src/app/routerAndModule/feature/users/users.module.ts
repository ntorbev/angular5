import { NgModule } from '@angular/core';

import { UsersGuardService } from './guards/users-guard.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersResolver } from './users-resolver';
import { CoreModule } from '@routerAndModule/core/core.module';
import { SharedModule } from '@routerAndModule/shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    CoreModule
  ],
  declarations: [UsersListComponent, UserComponent, UserDetailsComponent],
  providers: [UsersResolver, UsersGuardService]
})
export class UsersModule { }
