import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductModule } from 'src/app/components/product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from 'src/app/core/services';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {

    path: ':id',
    component: ProductDetailsComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ProductModule,
    MatProgressSpinnerModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
