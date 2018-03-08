import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import {ToDoService} from '../services/to-do.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AddToDoComponent} from '../add-to-do/add-to-do.component';
import {UiStateService} from '../services/ui-state.service';
import {Router} from '@angular/router';
import {RouterStub} from '../log-in/log-in.component.spec';
import {DeleteToDoComponent} from '../delete-to-do/delete-to-do.component';
import {ToDo} from '../classes/to-do';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        ToDoListComponent,
        AddToDoComponent,
        DeleteToDoComponent
      ],
      providers: [
        ToDoService,
        UiStateService,
        {
          provide: Router, useClass: RouterStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to log-in page aka /', () => {


    const router = TestBed.get(Router);

    const spy = spyOn(router, 'navigate');


    component.logout();

    expect(spy).toHaveBeenCalledWith(['/']);


  });



  it('should show delete todo dialog on delete()', () => {

    const _uiStateService = TestBed.get(UiStateService);

    component.delete(1);

    expect(component.id).toBe(1);
    expect(_uiStateService._deleteFormSubject).toBe('flex');



  });



  it('should show add todo dialog on openAddToDoForm()', () => {

    const _uiStateService = TestBed.get(UiStateService);


    component.openAddToDoForm();

    expect(_uiStateService._addFormSubject).toBe('flex');

  });



  it('should test deleteResult()', () => {

    const _uiStateService = TestBed.get(UiStateService);
    const toDoService = TestBed.get(ToDoService);


    const todo = new ToDo();

    todo.title = 'test';

    toDoService.addToDo(todo);

    toDoService.toDoArray$.subscribe((data) => {

      expect(data[0].id).toBe(1);
      expect(data[0].title).toContain('test');

    });

    component.id = 1;


    component.deleteResult(true);


    toDoService.toDoArray$.subscribe((data) => {

      expect(data.length).toBe(0);

    });



    expect(_uiStateService._deleteFormSubject).toBe('none');


    toDoService.addToDo(todo);

    component.deleteResult(false);


    toDoService.toDoArray$.subscribe((data) => {

      expect(data.length).toBe(1);

    });



  });

});
