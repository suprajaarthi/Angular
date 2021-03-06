import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, WarningAlertComponent, SuccessAlertComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
 //   HttpModule
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
