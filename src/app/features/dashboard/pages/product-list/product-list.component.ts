import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ConfirmationComponent } from 'src/app/features/dashboard/components/confirmation-modal/confirmation.component';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  isLoading = false
  products: Product[] = [];
  sort = 'asc';
  subscriptions$: Subscription[] = [];
  constructor(private productService: ProductService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
  ) { }
  ngOnInit(): void {
    this.loadAllProducts()
  }

  loadAllProducts() {
    this.isLoading = true;
    const getProductSub$ = this.productService.getProducts(null, this.sort).subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false
      },
      error: () => {
        this.isLoading = false
      }
    })
    this.subscriptions$.push(getProductSub$)
  }
  
  openDeleteProductDialog(productId: string): void {
    const dialogRef = this.dialog.open(ConfirmationComponent);
    dialogRef.afterClosed().subscribe(isDeleteConfirmed => {
      if (isDeleteConfirmed) this.deleteProduct(productId)
    });
  }

  deleteProduct(productId: string) {
    const deleteProductSub$: Subscription = this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.openSnackBar(this.translate.instant('PRODUCT.PRODUCT_DELETED'));
        this.loadAllProducts();
      }
    });
    this.subscriptions$.push(deleteProductSub$);
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2000 });
  }
  announceSortChange(sortState: Sort) {
    this.sort = sortState.direction
    this.loadAllProducts()
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe())
  }
}
