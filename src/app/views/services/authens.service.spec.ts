import { TestBed } from '@angular/core/testing';

import { AuthensService } from './authens.service';

describe('AuthensService', () => {
  let service: AuthensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
