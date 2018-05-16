import { TestBed, inject } from '@angular/core/testing';

import { AddsymptomService } from './addsymptom.service';

describe('AddsymptomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddsymptomService]
    });
  });

  it('should be created', inject([AddsymptomService], (service: AddsymptomService) => {
    expect(service).toBeTruthy();
  }));
});
