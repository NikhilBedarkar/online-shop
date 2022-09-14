import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$!:Observable<any[]>;
  constructor(orderService:OrderService,authservice:AuthService) {
    this.orders$=orderService.getAllOrders();
   }

  ngOnInit(): void {
  }

}
