import { Component, OnInit } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/order.service';

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
