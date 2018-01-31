import { Component, OnInit } from '@angular/core';
import {User} from '../model';
import {PrincipalService} from "../principal.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {};

  constructor(private principal: PrincipalService) { }

  ngOnInit() {
  }

  login() {
    this.principal.login(this.user).subscribe((resp) => console.log(resp));
  }
}
