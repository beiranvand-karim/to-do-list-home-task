import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {



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

  ngOnInit() {
  }

  formSubmit() {

    if (this.form.valid) {
      this.router.navigate(['/to-do-list']);
    }


  }

}
