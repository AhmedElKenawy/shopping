import { AuthService } from './../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';


export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isAuthenticated()) {        
        return of(true)
    } else {
        router.navigateByUrl('/login');
        return of(false)
    }
}