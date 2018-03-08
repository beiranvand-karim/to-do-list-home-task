import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';


export class RouterStub {


  navigate(params) {

  }

}


describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ LogInComponent ],
      providers: [
        {
          provide: Router, useClass: RouterStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate username and password', () => {


    const router = TestBed.get(Router);

    const spy = spyOn(router, 'navigate');


    component.formSubmit();


    expect(component.form.controls.username.value === 'test');
    expect(component.form.controls.password.value === 'test');

    expect(spy).toHaveBeenCalledWith(['/to-do-list']);


  });



});
