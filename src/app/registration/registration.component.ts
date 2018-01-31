import { Component, OnInit } from '@angular/core';
import {User} from '../model';
import {AccountService} from '../account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = {};
  repeatPassword: string;
  passwordsDoNotMatch: boolean;
  errorMessage: string;

  constructor( private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  registration() {
    const passwordsMatch = this.user.password === this.repeatPassword;
    this.passwordsDoNotMatch = !passwordsMatch;
    if (passwordsMatch) {
      this.accountService.registration(this.user)
        .subscribe((resp) => this.router.navigate(['login']),
          (error) => this.errorMessage = error.error.title);
    }
  }

}
