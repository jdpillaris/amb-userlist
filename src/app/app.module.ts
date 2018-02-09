import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';

import { AuthGuard} from './auth.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

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
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
