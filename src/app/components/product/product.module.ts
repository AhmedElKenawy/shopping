import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CategoriesService } from 'src/app/core/services';

@NgModule({
  declarations: [
    ProductCardComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatCardModule,
    MatListModule
  ],
  exports :[ProductCardComponent, FilterComponent],
  providers : [CategoriesService]
})
export class ProductModule { }
