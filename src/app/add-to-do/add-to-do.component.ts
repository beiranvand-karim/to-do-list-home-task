import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToDo} from '../classes/to-do';
import {ToDoService} from '../services/to-do.service';
import {UiStateService} from '../services/ui-state.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {




  form: FormGroup;

  title = new FormControl('', [Validators.minLength(3)]);




  constructor(
    public formBuilder: FormBuilder,
    private toDoService: ToDoService,
    public uiStateService: UiStateService

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

    this.uiStateService.hideAddForm();

  }

}
