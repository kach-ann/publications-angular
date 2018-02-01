import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PrincipalService} from './principal.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private principal: PrincipalService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.principal.isAdmin();
  }

}
