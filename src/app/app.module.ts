/*
  AppModule tells Angular how the pieces of your application fit together and what other files and libraries
  the app requires This is called the metadata.

  Some of the metaData is in the @Component decorators added to component classes

  Other critical metadata is in @NgModule decorators

  The most important @NgModule decorator annotates the top-level AppModule class.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  // declarations array
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [ // imports module contains list of external modules @NgModule releies  on.
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
