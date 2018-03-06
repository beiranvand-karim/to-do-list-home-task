import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UiStateService {


  private addFormSubject = new BehaviorSubject<string>('none');

  addForm$ = this.addFormSubject.asObservable();

  constructor() { }


  showAddForm() {

    this.addFormSubject.next('flex');
  }

  hideAddForm() {
    this.addFormSubject.next('none');

  }

}
