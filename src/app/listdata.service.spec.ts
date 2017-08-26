import { TestBed, inject } from '@angular/core/testing';

import { ListdataService } from './listdata.service';

describe('ListdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListdataService]
    });
  });

  it('should be created', inject([ListdataService], (service: ListdataService) => {
    expect(service).toBeTruthy();
  }));
});
