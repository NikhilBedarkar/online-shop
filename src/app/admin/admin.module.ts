import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from 'shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DataTablesModule,
    AdminRoutingModule
  ],
  exports:[
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ]
})
export class AdminModule { }
