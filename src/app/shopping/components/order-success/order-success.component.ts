import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
orderid!:string;
  constructor(activatedRoute:ActivatedRoute) {
    this.orderid=activatedRoute.snapshot.paramMap.get('order-id')!;
   }

  ngOnInit(): void {
  }

}
