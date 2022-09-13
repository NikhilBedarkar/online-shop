import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Order } from './models/order';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private shoppingCartService:ShoppingCartService) { 

  }
  async placeOrder(order:any){
   let result=this.db.list('/orders/').push(order);
  this.shoppingCartService.clearCart();
   return result;
  }

  getAllOrders(){
    return this.db.list('/orders/').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() as object }))
      )
    );;
  }
  getOrderByUser(userId:string){
    return this.db.list('/orders/',ref => ref.orderByChild('userId').equalTo(userId)).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() as object }))
      )
    );;
  }
}
