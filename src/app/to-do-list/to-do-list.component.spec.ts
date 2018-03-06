import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import {ToDoService} from '../services/to-do.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AddToDoComponent} from '../add-to-do/add-to-do.component';
import {UiStateService} from '../services/ui-state.service';

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
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
