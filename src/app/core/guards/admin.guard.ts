import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';



export const adminGuard = () => {
        const authService = inject(AuthService);
        const router = inject(Router);
        if (authService.isAuthenticated()) {
                const user = authService.currentUser;
                if (user && user.role == 'admin') return of(true)
        }
        router.navigateByUrl('/login');
        return of(false)
}