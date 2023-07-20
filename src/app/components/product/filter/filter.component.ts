import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories$ : Observable<string[]> | undefined
  selectedCategory: string | undefined;

  constructor(private categoryService  : CategoriesService) {}

  ngOnInit(): void {
    this.categories$  = this.categoryService.getAllCategories();
  }

  
}
