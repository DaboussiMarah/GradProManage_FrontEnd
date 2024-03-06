// guardadmin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../services/authuser.service';

@Injectable({
  providedIn: 'root',
})
export class GuarduserGuard implements CanActivate {
  constructor(private as: AuthuserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Checking user authentication status...');
    if (this.as.isUser()) {
      console.log('User is authenticated. Proceeding to the route.');
      return true;
    } else {
      console.log('User is not authenticated. Redirecting to /login_etud.');
      this.router.navigate(['/login_etud']);
      return false;
    }
  }
}
