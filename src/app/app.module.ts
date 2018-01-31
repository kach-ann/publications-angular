import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PublicationService} from './publication.service';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AccountService} from './account.service';
import {LocalStorageModule} from 'angular-2-local-storage';
import {PrincipalService} from './principal.service';
import {AuthHttpInterceptor} from './http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PublicationListComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LocalStorageModule.withConfig({
      prefix: 'angular-publications',
      storageType: 'localStorage'
    })
  ],
  providers: [
    PublicationService,
    AccountService,
    PrincipalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
