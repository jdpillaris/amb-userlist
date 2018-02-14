import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public authenticated;

  constructor() { 
    this.authenticated = false;
  }

  setIsAuthenticated() {
    this.authenticated = true;
  }

  isAuthenticated() {
    return this.authenticated;
  }

}
