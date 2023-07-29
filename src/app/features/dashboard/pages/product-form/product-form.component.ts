import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productForm!: FormGroup;
  categories: string[] = [];
  isLoading = false;
  isEdit = false;
  productId: string = '';
  hasErrorMessage: boolean = false;
  subscriptions$: Subscription[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getProductDataFromRoute();
    this.initForm();
    if (this.isEdit) {
      this.loadProductData();
    }
  }

  getProductDataFromRoute() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.categories = this.route.snapshot.data['categories'];
    this.isEdit = !!this.productId && this.productId !== 'new';
  }


  initForm(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  loadProductData(): void {
    const loadProductSub$ = this.productService.getProduct(this.productId)
      .subscribe({
        next: (product: Product) => {
          if (product) {
            this.productForm?.patchValue(product);
          }
        }
      });
    this.subscriptions$.push(loadProductSub$);
  }

  onSubmit(): void {
    if (this.isLoading) return;
    this.hasErrorMessage = false
    if (this.productForm?.valid) {
      const productData = this.productForm.value;
      let product$: Observable<Product>;
      this.isLoading = true
      if (this.isEdit) {
        productData.id = this.productId;
        product$ = this.productService.updateProducts(productData);
      } else {
        product$ = this.productService.createProducts(productData);
      }
      const submitSub$: Subscription = product$.subscribe({
        next: () => {
          this.isLoading = false;
          this.openSnackBar("Product Updated successfully");
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.isLoading = false;
          setTimeout(() => {
            this.hasErrorMessage = true
          }, 5000);
        }
      })
      this.subscriptions$.push(submitSub$)
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2000 });
  }
  ngOnDestroy(): void {
    this.subscriptions$.forEach(subscription => subscription.unsubscribe())
  }
}
