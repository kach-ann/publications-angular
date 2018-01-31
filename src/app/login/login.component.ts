import { Component, OnInit } from '@angular/core';
import {User} from '../model';
import {PrincipalService} from '../principal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {};

  constructor(private principal: PrincipalService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.principal.login(this.user).subscribe((resp) => this.router.navigate(['']));
  }
}
