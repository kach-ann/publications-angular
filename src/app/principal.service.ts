import { Injectable } from '@angular/core';
import {AccountService} from './account.service';
import {User} from './model';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from 'angular-2-local-storage';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class PrincipalService {
  private user$ = new ReplaySubject<User>(1);

  constructor(private accountService: AccountService,
              private localStorageService: LocalStorageService) {
    const token = this.localStorageService.get('token');
    if (token) {
      this.accountService.getCurrentUser().subscribe((user) => this.user$.next(user));
    }
  }

  login(user: User): Observable<User> {
    this.accountService.login(user)
      .do((token) => this.localStorageService.set('token', token))
      .flatMap((token) => this.accountService.getCurrentUser())
      .subscribe((currentUser) => {
        this.user$.next(currentUser);
    });

    return this.getCurrentUser();
  }

  getCurrentUser(): Observable<User> {
    return this.user$.asObservable();
  }

  logout() {
    this.localStorageService.remove('token');
    this.user$.next(null);
  }

}
