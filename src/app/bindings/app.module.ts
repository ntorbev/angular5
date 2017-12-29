import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './bindings.component';
import { CustomTwoWayDataBindingComponent } from './custom-two-way-data-binding/custom-two-way-data-binding.component';


@NgModule({
  declarations: [AppComponent, CustomTwoWayDataBindingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
