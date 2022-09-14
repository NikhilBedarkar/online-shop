import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products!:any[];
  filteredProducts!:any[];
  subscription;
  dtOptions:DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  constructor(private productService:ProductService) {
    this.subscription=productService.getAll().subscribe(p=>
      {this.filteredProducts= this.products=p
      this.dtTrigger.next(p);});
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  filter(query:string){
    this.filteredProducts=(query)?this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
    this.products;
  }

}
