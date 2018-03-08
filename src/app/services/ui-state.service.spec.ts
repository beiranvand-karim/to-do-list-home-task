import { TestBed, inject } from '@angular/core/testing';

import { UiStateService } from './ui-state.service';

describe('UiStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiStateService]
    });
  });

  it('should be created', inject([UiStateService], (service: UiStateService) => {


    expect(service).toBeTruthy();


  }));




  it('should show add-to-form', inject([UiStateService], (service: UiStateService) => {


    service.showAddForm();

    expect(service.addFormSubject.getValue()).toBe('flex');

  }));



  it('should hide add-to-form', inject([UiStateService], (service: UiStateService) => {

    service.hideAddForm();

    expect(service.addFormSubject.getValue()).toBe('none');


  }));



  it('should show delete-to-form', inject([UiStateService], (service: UiStateService) => {

    service.showDeleteForm();

    expect(service.deleteFormSubject.getValue()).toBe('flex');

  }));



  it('should hide delete-to-form', inject([UiStateService], (service: UiStateService) => {

    service.hideDeleteForm();

    expect(service.deleteFormSubject.getValue()).toBe('none');


  }));




});
