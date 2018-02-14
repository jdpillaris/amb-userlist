import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should set authentication status', inject([AuthService], (service: AuthService) => {
    // expect(service.setIsAuthenticated).toBeTruthy();
    expect(service.authenticated).toBeFalsy();
    service.setIsAuthenticated();
    expect(service.authenticated).toBeTruthy();
  }));
});
