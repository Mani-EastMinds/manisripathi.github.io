import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { SelectPageComponent } from './components/select-page/select-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    SelectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
