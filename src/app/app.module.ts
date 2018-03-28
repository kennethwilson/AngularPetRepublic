import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainRoutingModule } from './app.routing.module';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
