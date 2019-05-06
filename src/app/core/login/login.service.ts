import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthProviderService } from '../auth/auth-provider.service';
import { AccountService } from './../auth/account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authProvider: AuthProviderService,
    private accountService: AccountService
  ) { }

  login(credentials): Observable<any> {
    return this.authProvider.login(credentials);
  }

  logout(): Observable<any> {
    this.accountService.authenticate(null);
    return this.authProvider.logout();
  }
}
