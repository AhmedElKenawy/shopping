import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../services';

@Injectable()
export class CategoryResolver {
  constructor(private categoryService: CategoriesService) { }
  resolve(): Observable<string[]> {
    return this.categoryService.getAllCategories();
  }
}
