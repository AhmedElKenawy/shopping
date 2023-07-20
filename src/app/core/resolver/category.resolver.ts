import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoriesService } from '../services';

@Injectable()
export class CategoryResolver {
  constructor(private categoryService: CategoriesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string[]> {
        return this.categoryService.getAllCategories();
        // return of([])
  }
}
