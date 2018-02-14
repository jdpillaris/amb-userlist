import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { By } from '@angular/platform-browser';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      providers: [
        { provide: AuthService, useValue: AuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('form'));
    htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

  // it('form invalid when empty', () => {
  //   expect(htmlElement.valid).toBeFalsy();
  // });

describe('Component: Login', () => {

  let component: LoginFormComponent;
  let service: AuthService;
  let router: Router;
  let spy: any;

  beforeEach(() => { 
    service = new AuthService();
    component = new LoginFormComponent(router, service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });


  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'setIsAuthenticated').and.returnValue(false);
    // expect(component.loginUser).toBeTruthy();
    expect(service.authenticated).toBeFalsy();
  });

  it('canLogin returns true when the user is authenticated', () => {
    spy = spyOn(service, 'setIsAuthenticated').and.returnValue(true);
    // expect(component.loginUser).toBeTruthy();
    expect(service.authenticated).toBeTruthy();
  });
});
