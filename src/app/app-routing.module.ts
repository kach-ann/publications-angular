import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicationListComponent} from './publications/publication-list/publication-list.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {UsersComponent} from './users/users.component';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/publications',
    pathMatch: 'full'
  },
  {
    path: 'publications',
    component: PublicationListComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
