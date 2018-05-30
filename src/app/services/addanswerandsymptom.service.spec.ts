import { TestBed, inject } from '@angular/core/testing';

import { AddanswerandsymptomService } from './addanswerandsymptom.service';

describe('AddanswerandsymptomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddanswerandsymptomService]
    });
  });

  it('should be created', inject([AddanswerandsymptomService], (service: AddanswerandsymptomService) => {
    expect(service).toBeTruthy();
  }));
});
