import { mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, throwError, Observable, observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {

  constructor(private $localStorage: LocalStorageService) { }

  fetch({ username, password }: { username: string, password: string }): Observable<HttpResponse<any>> {
    if (username === 'admin' && password === 'admin') {
      const headers = new HttpHeaders({ Authorization: 'this-is-a-fake-token' });
      const response = new HttpResponse({ headers });
      return of(response);
    }

    return throwError('invalid credentials');
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.fetch(credentials).pipe(mergeMap(response => {
      const token = response.headers.get('Authorization');
      this.storeAuthenticationToken(token);
      return token;
    }));
  }

  storeAuthenticationToken(token: string): void {
    this.$localStorage.store('authenticationToken', token);
  }

  logout(): Observable<any> {
    this.$localStorage.clear('authenticationToken');
    return of();
  }
}
