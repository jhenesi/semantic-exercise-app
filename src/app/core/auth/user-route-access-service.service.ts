import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AccountService } from '../';

@Injectable({
  providedIn: 'root'
})
export class UserRouteAccessServiceService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    const authorities = route.data.authorities;
    return this.checkLogin(authorities);
  }

  checkLogin(authorities: string[]): Observable<boolean> {
    return this.accountService.identity().pipe(mergeMap(account => {
      if (!authorities || authorities.length === 0) {
        return of(true);
      }

      if (account) {
        const hasAnyAuthority = this.accountService.hasAnyAuthority(authorities);
        if (hasAnyAuthority) {
          return of(true);
        }
        return of(false);
      }

      this.router.navigate(['login']);

      return of(false);
    }));
  }

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }
}
