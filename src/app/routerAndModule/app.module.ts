import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './router-and-module.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  declarations: [HomeComponent, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
