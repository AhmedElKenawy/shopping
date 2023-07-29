import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SwitchLanguageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule.forChild(),
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatSelectModule
  ],
  exports: [TranslateModule, MatButtonModule, MatIconModule , MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatSelectModule,
  SwitchLanguageComponent
  ],
})
export class SharedModule {}
