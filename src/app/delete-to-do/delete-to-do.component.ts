import {Component, EventEmitter, Output} from '@angular/core';
import {UiStateService} from '../services/ui-state.service';

@Component({
  selector: 'app-delete-to-do',
  templateUrl: './delete-to-do.component.html',
  styleUrls: ['./delete-to-do.component.scss']
})
export class DeleteToDoComponent {


  @Output() deleteToDo = new EventEmitter<boolean>();

  constructor(
    public uiStateService: UiStateService
  ) { }

  verify() {

    this.deleteToDo.emit(true);

  }

  cancel() {
    this.deleteToDo.emit(false);

  }

}
