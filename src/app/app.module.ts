import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {ToDoService} from './services/to-do.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
