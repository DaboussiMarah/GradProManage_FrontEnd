
// guardadmin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';
import {  AuthensService } from '../services/authens.service';

@Injectable({
  providedIn: 'root',
})
export class GuardensGuard implements CanActivate {
  constructor(private as: AuthensService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.as.isEns()) {
      return true;
    } else {
      this.router.navigate(['/loginens']);
      return false;
    }
  }
}
