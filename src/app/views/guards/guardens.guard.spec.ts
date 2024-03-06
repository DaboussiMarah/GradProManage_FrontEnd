import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardensGuard } from './guardens.guard';

describe('guardensGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardensGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
