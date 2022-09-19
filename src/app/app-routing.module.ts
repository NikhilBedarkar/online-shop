import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"shopping-cart",component:ShoppingCartComponent},
  {path:"login",component:LoginComponent},

  {path:"check-out",component:CheckOutComponent,canActivate:[AuthGuard]},
  {path:"order-success/:order-id",component:OrderSuccessComponent,canActivate:[AuthGuard]},
  {path:"my/orders",component:MyOrdersComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
