import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CategoryResolver } from 'src/app/core/resolver/category.resolver';
import { CategoriesService } from 'src/app/core/services';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { ConfirmationComponent } from './components/confirmation-modal/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'new-product',
    component: ProductFormComponent,
    resolve: {
      categories: CategoryResolver
    }
  },
  {

    path: 'edit-product/:id',
    component: ProductFormComponent,
    resolve: {
      categories: CategoryResolver
    }
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }

]


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSortModule,
    MatDialogModule,
  ],
  providers: [CategoryResolver, CategoriesService
  ]
})
export class DashboardModule { }
