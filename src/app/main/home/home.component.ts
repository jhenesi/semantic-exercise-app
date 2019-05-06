import { Component, OnInit } from '@angular/core';
import { AccountService, EventManagerService } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  account: any;

  constructor(
    private accountService: AccountService,
    private eventManager: EventManagerService
  ) { }

  ngOnInit() {
    this.accountService.identity().subscribe(account => this.account = account);
    this.registerAuthenticationSuccess();
    this.registerLogoutSuccess();
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

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

}
