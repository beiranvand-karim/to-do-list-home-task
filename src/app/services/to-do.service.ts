import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ToDo} from '../classes/to-do';

@Injectable()
export class ToDoService {


  private toDoArraySubject = new BehaviorSubject<ToDo[]>([]);
  public toDoArray$ = this.toDoArraySubject.asObservable();

  constructor() { }


  addToDo(toDo: ToDo) {

    toDo.id = this.toDoArraySubject.getValue().length + 1;

    this.toDoArraySubject.getValue().push(toDo);

  }


  deleteToDo(id: number) {

    const index = this.toDoArraySubject.getValue().findIndex((toDo: ToDo) => toDo.id === id);

    if ( index > -1) {
      this.toDoArraySubject.getValue().splice(index, 1);
    }

  }




}
