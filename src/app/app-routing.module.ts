import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'log-in', pathMatch: 'full'
  },
  {
    path: 'log-in', component: LogInComponent
  },
  {
    path: 'to-do-list', component: ToDoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
