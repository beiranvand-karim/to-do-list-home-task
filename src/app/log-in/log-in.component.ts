import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {



  form: FormGroup;

  username = new FormControl('test');
  password = new FormControl('test');

  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) {

    this.form = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });

  }

  formSubmit() {

    if (this.form.controls.username.value === 'test' && this.form.controls.password.value === 'test') {
      this.router.navigate(['/to-do-list']);
    }


  }

}
