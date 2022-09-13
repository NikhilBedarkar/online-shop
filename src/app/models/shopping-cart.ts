import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';
export class ShoppingCart {
  items:ShoppingCartItem[]=[];
  constructor(private itemsMap: {[productId:string] : ShoppingCartItem}) {
    this.itemsMap=itemsMap||{};
    for(let productId in itemsMap){
      let x=new ShoppingCartItem();
      Object.assign(x,itemsMap[productId]);
      x.$key=productId;
      this.items.push(x);
    }
  }

  getQuantity(product:Product) {
    let item = this.itemsMap[product.key as string];
    return item ? item.quantity : 0;
  }

  get totalCartPrice(){
    let sum=0;
    for(let product in this.items){
      sum+=this.items[product].totalPrice;
    }
    return sum;
  }

  get totalItemCount() {
    let count = 0;
    for (let productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count;
  }
}
