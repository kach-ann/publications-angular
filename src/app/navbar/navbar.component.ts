import { Component, OnInit } from '@angular/core';
import {PrincipalService} from '../principal.service';
import {Observable} from "rxjs/Observable";
import {User} from "../model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser$: Observable<User>;
  isCurrentUserAdmin$: Observable<boolean>;

  constructor( private principal: PrincipalService) { }

  ngOnInit() {
    this.currentUser$ = this.principal.getCurrentUser();
    this.isCurrentUserAdmin$ = this.principal.isAdmin();
  }

  logout(){
    this.principal.logout();
  }

}
