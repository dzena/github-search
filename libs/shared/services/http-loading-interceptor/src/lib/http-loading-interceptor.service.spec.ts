import { TestBed } from '@angular/core/testing';

import { HttpLoadingInterceptorService } from './http-loading-interceptor.service';

describe('HttpLoadingInterceptorService', () => {
  let service: HttpLoadingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLoadingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
