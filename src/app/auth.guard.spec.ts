import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

describe('Logged in guard should', () => {
    let guard: AuthGuard;
    let service: AuthService;
    let router = {
        navigate: jasmine.createSpy('navigate')
    };

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard, AuthService,
              {provide: Router, useValue: router}
            ]
        })
        .compileComponents(); // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
      guard = TestBed.get(AuthGuard);
      service = TestBed.get(AuthService);
    });

    it('be able to hit route when user is logged in', () => {
        service.authenticated = true;
        expect(guard.canActivate()).toBe(true);
    });

    it('not be able to hit route when user is not logged in', () => {
        service.authenticated = false;
        expect(guard.canActivate()).toBe(false);
    });
});
