import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationComponent } from 'src/app/components/modals/confirmation/confirmation.component';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  loading = false
  products: Product[] = [];
  sort  = 'asc';
  constructor(private productService: ProductService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
  ) { }
  ngOnInit(): void {

    this.loadAllProducts()
  }
  ngOnDestroy() {
  }
  loadAllProducts() {
    this.loading = true;
    this.productService.getProducts(null, this.sort).subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false
      },
      error: () => {
        this.loading = false
      }
    })
  }
  deleteProduct(productId: string): void {
    const dialogRef = this.dialog.open(ConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(productId).subscribe({
          next: () => {
          this.openSnackBar(this.translate.instant('PRODUCT.PRODUCT_DELETED'));
            this.loadAllProducts();
          }
        });
      }
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', { duration: 2000 });
  }
  announceSortChange(sortState: Sort) {
    this.sort = sortState.direction 
      this.loadAllProducts()
  }

}
