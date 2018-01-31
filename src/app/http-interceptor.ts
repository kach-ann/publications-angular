import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.get('token');
    let authReq;
    if (token ){
      authReq = req.clone({setHeaders: {Authorization: `Bearer ${token}`}});
    } else{
      authReq = req;
    }
    return next.handle(authReq);
  }
}
