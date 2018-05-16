import { TestBed, inject } from '@angular/core/testing';

import { GetpatientService } from './getpatient.service';

describe('GetpatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetpatientService]
    });
  });

  it('should be created', inject([GetpatientService], (service: GetpatientService) => {
    expect(service).toBeTruthy();
  }));
});
