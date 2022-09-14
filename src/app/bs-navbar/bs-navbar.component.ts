import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  appUser!: Observable<AppUser|null>;
  user!:any;
  cart$!: Observable<ShoppingCart>;
  constructor(private authService: AuthService,private shoppingCartService:ShoppingCartService) {
    
  }
  async ngOnInit(){
    this.authService.user$.subscribe(user=>{if(user)this.appUser=this.authService.getappUser(user.uid)
    else this.appUser=EMPTY})
    this.cart$=await this.shoppingCartService.getCart();
  }

  logout() {
    this.authService.logout();
  }
}
