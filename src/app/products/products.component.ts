import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[]=[];
  filteredProducts:any[]=[];
  categories$:any;
  category:any;
  constructor(productService:ProductService,categoryService:CategoryService,route:ActivatedRoute) { 
    this.categories$=categoryService.getAll();
    productService.getAll().pipe(switchMap( p=>{this.products=p
      return route.queryParamMap;
    }))
    .subscribe(x=>{
      this.category=x.get('category');
      this.filteredProducts=(this.category)? this.products.filter(x => x.category===this.category):this.products;
    })
  }

  ngOnInit(): void {
  }

}
