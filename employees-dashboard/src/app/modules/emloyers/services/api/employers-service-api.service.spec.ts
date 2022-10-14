import { TestBed } from '@angular/core/testing';

import { EmployersServiceApiService } from './employers-service-api.service';

describe('EmployersServiceApiService', () => {
  let service: EmployersServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployersServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
