import { AuthService } from './../services/auth.service';
// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable, of } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService : AuthService , private router : Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if(this.authService.isAuthenticated()){
            return of(true)
        } else {
            this.router.navigateByUrl('/login');
            return of(false)
        }
	}
}
