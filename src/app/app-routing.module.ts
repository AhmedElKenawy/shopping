import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path : '',
    loadChildren :  ()=> import('./features/home/home.module').then(m=>m.HomeModule),
    canActivate :[authGuard]
  },
  
  {
    path : 'login',
    loadChildren :  ()=> import('./features/auth/auth.module').then(m=>m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
