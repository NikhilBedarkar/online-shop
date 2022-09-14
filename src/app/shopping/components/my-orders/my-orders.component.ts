import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$!:Observable<any[]>;
  constructor(orderService:OrderService,authService:AuthService) {
    this.orders$=authService.user$.pipe(switchMap(user=>orderService.getOrderByUser(user!.uid)))
   }

  ngOnInit(): void {
  }

}
