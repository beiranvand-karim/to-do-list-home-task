import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../services/to-do.service';
import {UiStateService} from '../services/ui-state.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {



  constructor(
    public toDoService: ToDoService,
    public uiStateService: UiStateService,
    public router: Router
  ) {


  }

  ngOnInit() {
  }


  logout() {


    this.router.navigate(['/']);

  }


  delete(id: number) {
    this.toDoService.deleteToDo(id);
  }

  openAddToDoForm() {

    this.uiStateService.showAddForm();

  }

}
