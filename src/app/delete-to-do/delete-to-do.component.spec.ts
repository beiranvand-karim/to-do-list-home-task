import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteToDoComponent } from './delete-to-do.component';
import {UiStateService} from '../services/ui-state.service';

describe('DeleteToDoComponent', () => {
  let component: DeleteToDoComponent;
  let fixture: ComponentFixture<DeleteToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteToDoComponent ],
      providers: [
        UiStateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should test verify()', () => {



    component.verify();

    component.deleteToDo.subscribe((s: boolean) => {

      expect(s).toBeTruthy();

    });

  });


  it('should test cancel()', () => {


    component.cancel();

    component.deleteToDo.subscribe((s: boolean) => {

      expect(s).toBeFalsy();

    });

  });


});
