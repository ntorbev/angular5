import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TitleComponent } from '@routerAndModule/shared/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [TitleComponent],
  exports: [CommonModule, TitleComponent]
})
export class SharedModule {}
