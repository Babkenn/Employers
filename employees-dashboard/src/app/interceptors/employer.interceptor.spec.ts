import { TestBed } from '@angular/core/testing';

import { EmployerInterceptor } from './employer.interceptor';

describe('EmployerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EmployerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EmployerInterceptor = TestBed.inject(EmployerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
