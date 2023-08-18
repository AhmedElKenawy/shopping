import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { SwitchLanguageComponent } from 'src/app/shared/components/switch-language/switch-language.component';
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
    SwitchLanguageComponent,
    MatButtonModule,
  ]
})
export class AuthModule { }
