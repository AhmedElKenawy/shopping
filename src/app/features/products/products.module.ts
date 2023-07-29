import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesService, ProductService } from 'src/app/core/services';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FilterComponent } from './components/filter/filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsComponent } from './pages/products/products.component';

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
    ProductsComponent,
    ProductCardComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule
  ],
  providers: [ProductService, CategoriesService]
})
export class ProductsModule { }
