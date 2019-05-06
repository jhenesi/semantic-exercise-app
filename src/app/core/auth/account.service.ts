import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { mergeMap, catchError } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userIdentity: any;
  private authenticated = false;

  constructor(private localStorageService: LocalStorageService) { }

  fetch(): Observable<HttpResponse<any>> {
    const token = this.localStorageService.retrieve('authenticationToken');

    if (token === 'this-is-a-fake-token') {
      const body = {
        login: 'admin',
        authorities: ['ROLE_ADMIN']
      };

      const response = new HttpResponse({ body });

      return of(response);
    }

    return throwError('invalid token');
  }

  authenticate(identity): void {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
  }

  hasAnyAuthority(authorities: string[]): boolean {
    if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }

    for (const authority of authorities) {
      if (this.userIdentity.authorities.includes(authority)) {
        return true;
      }
    }

    return false;
  }

  identity(force?: boolean): Observable<any> {
    if (force) {
      this.userIdentity = undefined;
    }

    if (this.userIdentity) {
      return of(this.userIdentity);
    }

    return this.fetch().pipe(catchError(err => of({ body: null })), mergeMap(response => {
      const account = response.body;
      if (account) {
        this.userIdentity = account;
        this.authenticated = true;
      } else {
        this.userIdentity = null;
        this.authenticated = false;
      }
      return of(this.userIdentity);
    }));
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
