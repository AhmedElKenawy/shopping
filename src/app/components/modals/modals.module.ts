import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule
  ],
  exports :[ConfirmationComponent],
})
export class ModalsModule { }
