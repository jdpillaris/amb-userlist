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
import { MatDialogModule } from '@angular/material';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
// import {MatPaginatorIntl} from '@angular/material';
// import {MatPaginatorIntlPersonList} from './MatPaginatorIntlPersonList';

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
    PersonListComponent,
    PersonDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule
  ],
  entryComponents: [PersonDialogComponent],
  providers: [
    AuthService, 
    AuthGuard,
    // { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPersonList }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
