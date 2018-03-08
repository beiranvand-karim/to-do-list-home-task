import { Component } from '@angular/core';
import {ToDoService} from '../services/to-do.service';
import {UiStateService} from '../services/ui-state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {


  public id: number;

  constructor(
    public toDoService: ToDoService,
    public uiStateService: UiStateService,
    public router: Router
  ) {


  }


  logout() {


    this.router.navigate(['/']);

  }


  delete(id: number) {

    this.id = id;

    this.uiStateService.showDeleteForm();

  }

  openAddToDoForm() {

    this.uiStateService.showAddForm();

  }

  deleteResult(event: boolean) {

    this.uiStateService.hideDeleteForm();

    if (event === true) {
      this.toDoService.deleteToDo(this.id);
    }

  }

}
