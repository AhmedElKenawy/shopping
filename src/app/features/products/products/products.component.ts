import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  selectedCategory: string | null = 'All';
  loading = false;
  subscription: Subscription | undefined;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.subscription = this.route.paramMap.subscribe(params => {

      this.selectedCategory = params.get('category');
      this.loadAllProducts()
    });

    this.loadAllProducts()
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  loadAllProducts() {
    this.loading = true;
     this.productService.getProducts(this.selectedCategory).subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false
      },
      error: () => {
        this.loading = false
      }
    })
  }
}
