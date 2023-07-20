import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from 'src/app/core/services/api/products.service';
import { ProductModule } from 'src/app/components/product/product.module';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const Routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),


      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AdminGuard]
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(Routes),
    CommonModule,
    HeaderModule,
    SharedModule,
  ],
  providers: [ProductService, AdminGuard]
})
export class HomeModule { }
