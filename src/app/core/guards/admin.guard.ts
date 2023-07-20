import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
export class AdminGuard implements CanActivate {
	constructor(private authService : AuthService , private router : Router) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if(this.authService.isAuthenticated()){
             const user = this.authService.currentUser;
             if(user && user.role == 'admin') return of(true)
        }
        this.router.navigateByUrl('/login');
        return of(false)
	}
}
