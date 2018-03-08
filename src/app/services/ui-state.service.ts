import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UiStateService {


  public addFormSubject = new BehaviorSubject<string>('none');

  addForm$ = this.addFormSubject.asObservable();


  public deleteFormSubject = new BehaviorSubject<string>('none');

  deleteFormForm$ = this.deleteFormSubject.asObservable();

  get _deleteFormSubject() {

    return this.deleteFormSubject.getValue();

  }

  get _addFormSubject() {

    return this.addFormSubject.getValue();

  }


  showAddForm() {

    this.addFormSubject.next('flex');
  }

  hideAddForm() {
    this.addFormSubject.next('none');

  }


  showDeleteForm() {

    this.deleteFormSubject.next('flex');
  }

  hideDeleteForm() {
    this.deleteFormSubject.next('none');

  }


}
