import { TestBed } from '@angular/core/testing';

import { InstituteServiceService } from './institute-service.service';

describe('InstituteServiceService', () => {
  let service: InstituteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
