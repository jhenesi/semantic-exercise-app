import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/login/login.service';
import { Router } from '@angular/router';
import { EventManagerService } from 'src/app/core';
import { Textfield } from 'src/app/dynamic-forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  fields = [
    new Textfield({
      key: 'username',
      label: 'Username',
      value: '',
      required: true,
      maxLength: 5,
      type: 'text'
    }),
    new Textfield({
      key: 'password',
      label: 'Password',
      value: '',
      required: true,
      maxLength: 5,
      type: 'password'
    })
  ];

  constructor(
    private loginService: LoginService,
    private eventManager: EventManagerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(credentials) {
    this.loginService.login(credentials).subscribe(() => {
      this.eventManager.broadcast({
        name: 'authenticationSuccess',
        content: 'Sending Authentication Success'
      });
      this.router.navigate(['']);
    },
      err => console.log(err));
  }

}
