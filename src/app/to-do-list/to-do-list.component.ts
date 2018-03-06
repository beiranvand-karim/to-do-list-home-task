import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../services/to-do.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToDo} from '../classes/to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {



  form: FormGroup;

  title = new FormControl('', [Validators.minLength(3)]);



  constructor(
    public toDoService: ToDoService,
    public formBuilder: FormBuilder,
  ) {

    this.form = this.formBuilder.group({
      title: this.title
    });
  }

  ngOnInit() {
  }


  formSubmit() {


    const todo = new ToDo();

    todo.title = this.form.controls.title.value;


    this.toDoService.addToDo(todo);

  }


  delete(id: number) {
    this.toDoService.deleteToDo(id);
  }

}
