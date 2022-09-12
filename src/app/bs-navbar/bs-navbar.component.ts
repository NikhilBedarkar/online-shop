import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  appUser!: AppUser | null;
  cart$!: Observable<ShoppingCart>;
  constructor(private authService: AuthService,private shoppingCartService:ShoppingCartService) {
    
  }
  async ngOnInit(){
    this.authService.appUser$.subscribe((user) => (this.appUser = user));
    this.cart$=await this.shoppingCartService.getCart();
   
  }

  logout() {
    this.authService.logout();
  }
}
