import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  products:any[]=[];
  filteredProducts:any[]=[];
  cart:any;
  subscription:Subscription | undefined;
 
  category:any;
  constructor(productService:ProductService,route:ActivatedRoute,private shoppingCartService:ShoppingCartService) { 
   

    productService.getAll().pipe(switchMap( p=>{this.products=p
      return route.queryParamMap;
    }))
    .subscribe(x=>{
      this.category=x.get('category');
      this.filteredProducts=(this.category)? this.products.filter(x => x.category===this.category):this.products;
    })
  }

  async ngOnInit() {
   this.subscription= (await this.shoppingCartService.getCart()).subscribe(cart=>{
      this.cart=cart;
    });
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

}
