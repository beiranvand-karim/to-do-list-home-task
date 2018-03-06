import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import {ToDoService} from '../services/to-do.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AddToDoComponent} from '../add-to-do/add-to-do.component';
import {UiStateService} from '../services/ui-state.service';
import {Router} from '@angular/router';
import {RouterStub} from '../log-in/log-in.component.spec';

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
});
