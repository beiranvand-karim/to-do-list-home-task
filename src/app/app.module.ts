import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {ToDoService} from './services/to-do.service';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import {UiStateService} from './services/ui-state.service';
import { DeleteToDoComponent } from './delete-to-do/delete-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ToDoListComponent,
    AddToDoComponent,
    DeleteToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    ToDoService,
    UiStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
