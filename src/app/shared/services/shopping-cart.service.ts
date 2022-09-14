import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Observable, take } from 'rxjs';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartID = await this.getOrCreateCartId();
    return this.db
      .object('/shopping-carts/' + cartID)
      .valueChanges()
      .pipe(map((x: any) => new ShoppingCart(x!.items)));
  }

  addToCart(product: Product) {
    this.updateCartItems(product, 1);
  }

  removeFromCart(product: Product) {
    this.updateCartItems(product, -1);
  }

  async clearCart() {
    let cartID = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartID + '/items/').remove();
  }

  private getItemFormCart(cartId: string | null, productId: String | null) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async updateCartItems(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItemFormCart(cartId, product.key);
    item$
      .valueChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        let quantity = item === null ? 0 + 1 : item.quantity + change;
        if (quantity === 0) item$.remove();
        else
          item$.update({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: quantity,
          });
      });
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key!);
    return result.key;
  }
}
