import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoComponent } from './add-to-do.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ToDoService} from '../services/to-do.service';
import {UiStateService} from '../services/ui-state.service';
import {ToDo} from '../classes/to-do';

describe('AddToDoComponent', () => {
  let component: AddToDoComponent;
  let fixture: ComponentFixture<AddToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        AddToDoComponent
      ],
      providers: [
        ToDoService,
        UiStateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test formSubmit()', () => {

    const service = TestBed.get(ToDoService);
    const uiStateService = TestBed.get(UiStateService);

    service.toDoArray$.subscribe((data: ToDo[]) => {

      expect(data.length).toBe(0);

    });

    component.form.controls.title.setValue('test');

    component.formSubmit();

    service.toDoArray$.subscribe((data: ToDo[]) => {

      expect(data.length).toBe(1);

    });

    expect(uiStateService._addFormSubject).toBe('none');

  });
});
