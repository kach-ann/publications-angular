import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicationListComponent} from './publications/publication-list/publication-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/publications',
    pathMatch: 'full'
  },
  {
    path: 'publications',
    component: PublicationListComponent
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
