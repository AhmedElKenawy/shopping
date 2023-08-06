import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from 'src/app/core/services/api/products.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { adminGuard } from 'src/app/core/guards/admin.guard';

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
        canActivate: [adminGuard]
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
    HeaderComponent
  ],
  imports: [
    RouterModule.forChild(Routes),
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [ProductService]
})
export class HomeModule { }
