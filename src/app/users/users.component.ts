import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../model';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor( private accountService: AccountService) { }

  ngOnInit() {
    this.users$ = this.accountService.getUsers();
  }

}
