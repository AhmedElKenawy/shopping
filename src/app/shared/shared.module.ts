import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule.forChild(),
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
  ],
  exports: [TranslateModule, MatButtonModule, MatIconModule , MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, ],
})
export class SharedModule {}
