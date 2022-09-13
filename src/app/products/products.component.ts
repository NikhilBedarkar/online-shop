import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:any[]=[];
  filteredProducts:any[]=[];
  cart$!:Observable<ShoppingCart>;
 
  category:any;
  constructor(private productService:ProductService, private route:ActivatedRoute,private shoppingCartService:ShoppingCartService) { 
  }

  async ngOnInit() {
  this.cart$=await this.shoppingCartService.getCart();
  this.populateProducts();
  }

  populateProducts(){
    this.productService.getAll().pipe(switchMap( p=>{this.products=p
      return this.route.queryParamMap;
    }))
    .subscribe(x=>{
      this.category=x.get('category');
      this.applyFilter();
    })
  }

  applyFilter(){
    this.filteredProducts=(this.category)? this.products.filter(x => x.category===this.category):this.products;
  }

}
