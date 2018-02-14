import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    let isLoggedIn = this.authService.isAuthenticated();
    if (!isLoggedIn) {
      this.router.navigate(['/']);
    }
    return isLoggedIn;
  }
}
