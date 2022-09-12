import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input('category')category: any;
  categories$:any;
  constructor(categoryService:CategoryService) {
    this.categories$=categoryService.getAll();
   }

  ngOnInit(): void {
  }

}
