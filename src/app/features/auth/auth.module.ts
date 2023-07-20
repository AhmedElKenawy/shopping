import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { SwitchLanguageModule } from 'src/app/components/switch-language/switch-language.module';
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
    SharedModule,
    RouterModule.forChild(Routes),
   
    MatButtonModule,
    SwitchLanguageModule
  ]
})
export class AuthModule { }
