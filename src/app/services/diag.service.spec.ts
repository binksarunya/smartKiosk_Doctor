import { TestBed, inject } from '@angular/core/testing';

import { DiagService } from './diag.service';

describe('DiagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiagService]
    });
  });

  it('should be created', inject([DiagService], (service: DiagService) => {
    expect(service).toBeTruthy();
  }));
});
