import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicationListComponent} from './publications/publication-list/publication-list.component';
import {LoginComponent} from './login/login.component';

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
