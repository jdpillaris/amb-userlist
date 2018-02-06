import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';

import { AuthGuard} from './auth.guard';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'persons',
    canActivate: [AuthGuard],
    component: PersonListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
