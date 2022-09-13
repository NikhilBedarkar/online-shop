import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$!: Observable<ShoppingCart>;
  constructor(private shoppingCartService:ShoppingCartService) { 

  }

  async ngOnInit(){
    this.cart$= await this.shoppingCartService.getCart();
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

  getProduct(item:ShoppingCartItem){
   return new Product(item.$key,item.title,item.imageUrl,item.price,item.category);
  }
}
