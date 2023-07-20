import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwitchLanguageComponent } from './switch-language.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    SwitchLanguageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatSelectModule
  ],
  providers: [],
  exports:[SwitchLanguageComponent]
})
export class SwitchLanguageModule { }
