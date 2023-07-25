import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categories: string[] = [];
  loading = false;
  isEdit = false;
  productId: string;
  showErrorMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.categories = this.route.snapshot.data['categories'];
    console.log(this.categories)
    this.isEdit = !!this.productId && this.productId !== 'new';
  }

  ngOnInit(): void {
    this.initForm();
    if (this.isEdit) {
      this.loadProductData();
    }
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
    this.productService.getProduct(this.productId).subscribe((product: Product) => {
      if (product) {
        this.productForm?.patchValue({
          title: product.title,
          price: product.price,
          category: product.category,
          description: product.description,
          image: product.image
        });
      }
    });
  }

  onSubmit(): void {
    if (this.loading) return;
    this.showErrorMessage = false
    if (this.productForm?.valid) {
      const productData = this.productForm.value;
      let sub;
      this.loading = true
      if (this.isEdit) {
        productData.id = this.productId;
        sub = this.productService.updateProducts(productData);
      } else {
        sub = this.productService.createProducts(productData);
      }
      sub.subscribe({
        next: () => {
          this.loading = false;
          this.openSnackBar("Product Updated successfully");
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.loading = false;
          setTimeout(() => {

            this.showErrorMessage = true
          }, 5000);
        }
      })
    } else {
    }
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', { duration: 2000 });
  }
}
