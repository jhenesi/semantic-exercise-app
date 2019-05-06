import { Component, OnInit } from '@angular/core';
import { AccountService, EventManagerService } from 'src/app/core';
import { LoginService } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  account: any;

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
    private eventManager: EventManagerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.accountService.identity().subscribe(account => this.account = account);
    this.registerAuthenticationSuccess();
    this.registerLogoutSuccess();
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.router.navigate(['login']);
  }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', () => {
      this.accountService.identity().subscribe(account => this.account = account);
    });
  }

  registerLogoutSuccess() {
    this.eventManager.subscribe('logoutSuccess', () => {
      this.accountService.identity().subscribe(account => this.account = account);
    });
  }

  logout() {
    this.loginService.logout().subscribe(() => {
      this.eventManager.broadcast({
        name: 'logoutSuccess',
        content: 'Sending Logout Success'
      });
    });
    this.router.navigate(['']);
  }
}
