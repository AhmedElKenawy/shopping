import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
const Routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
]
@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class AuthModule { }
