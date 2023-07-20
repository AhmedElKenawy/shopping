import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path : '',
    loadChildren :  ()=> import('./features/home/home.module').then(m=>m.HomeModule),
    canActivate :[AuthGuard]
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
