import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownPageComponent } from './components/dropdown-page/dropdown-page.component';
import { SelectComponent } from './components/select/select.component';
import { SelectPageComponent } from './components/select-page/select-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    DropdownPageComponent,
    SelectComponent,
    SelectPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
