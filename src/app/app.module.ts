import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JokeComponent } from './joke/joke.component';
import { TodoComponent } from './todo/todo.component';
import { Joke2Component } from './joke2/joke2.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    TodoComponent,
    Joke2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
