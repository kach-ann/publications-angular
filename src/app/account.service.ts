import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AccountService {
  private readonly url = 'api/authenticate';
  private readonly accountUrl = 'api/account';
  private readonly registrationUrl = 'api/register';
  private readonly usersUrl = 'api/users';

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<string> {
    return this.http.post(this.url, {
      'username': user.login,
      'password': user.password
    })
      .map((resp) => resp['id_token']);
  }


  getCurrentUser(): Observable<User> {
    return this.http.get(this.accountUrl);
  }

  registration (user: User): Observable<any> {
    return this.http.post(this.registrationUrl, user);
  }

  getUsers(): Observable< User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}

