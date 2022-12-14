import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth.guard';
import { AdminAuthGuard } from '../admin-auth.guard';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {path:"admin/products/new",component:ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},
  {path:"admin/products/:id",component:ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},
  {path:"admin/products",component:AdminProductsComponent,canActivate:[AuthGuard,AdminAuthGuard]},
  {path:"admin/orders",component:AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGuard]},
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
