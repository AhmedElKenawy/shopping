import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  loading = true;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.getProduct(productId);
    });

  }
  getProduct(productId: string) {
    this.loading = true
    this.productService.getProduct(productId).subscribe(
      {
        next: product => {
          this.product = product
          this.loading = false
        },
        error: () => {
          this.loading = false
        }

      }
    );
  }
}