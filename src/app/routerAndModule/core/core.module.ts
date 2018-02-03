import { UsersService } from './users.service';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  // providers: [UsersService]
})
export class CoreModule {
/** uncomment constructor and will force core module to be imported at only one place */
//  constructor(@Optional() @SkipSelf() parent: CoreModule) {
//    if (parent) {
//      throw new Error('Core module is already provided elsewhere!');
//    }
//  }
/** */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [UsersService]
    };
  }
}
