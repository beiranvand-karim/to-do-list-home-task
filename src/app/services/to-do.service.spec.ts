import { TestBed, inject } from '@angular/core/testing';

import { ToDoService } from './to-do.service';
import {ToDo} from '../classes/to-do';

describe('ToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoService]
    });
  });

  it('should be created', inject([ToDoService], (service: ToDoService) => {
    expect(service).toBeTruthy();
  }));



  it('should validate that todos list is empty in the beginning', inject([ToDoService], (service: ToDoService) => {

    service.toDoArray$.subscribe((todo: ToDo[]) => {
      expect(todo.length).toBe(0);
    });

  }));



  it('should add a to-do by addToDo()', inject([ToDoService], (service: ToDoService) => {

    const todo = new ToDo();

    todo.title = 'test';
    todo.id = 0;

    service.addToDo(todo);

    service.toDoArray$.subscribe((toDo: ToDo[]) => {
      expect(toDo.length).toBe(1);
    });

  }));


  it('should delete a todo by deleteToDo()', inject([ToDoService], (service: ToDoService) => {

    const todo = new ToDo();

    todo.title = 'test';
    todo.id = 0;


    service.addToDo(todo);
    service.deleteToDo(0);


    service.toDoArray$.subscribe((_toDo: ToDo[]) => {
      expect(_toDo.length).toBe(0);
    });

  }));





});
