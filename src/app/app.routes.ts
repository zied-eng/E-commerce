import { Routes } from '@angular/router';
import { AllproductComponent } from './products/component/allproduct/allproduct.component';
import { DatilesComponent } from './products/component/datiles/datiles.component';
import { CartComponent } from './carts/component/cart/cart.component';

export const routes: Routes = [


   
    { path: 'Allproduct', component: AllproductComponent },
    { path: 'Datiles/:id', component: DatilesComponent},
    { path: 'Cart', component: CartComponent },
    { path: '***',   redirectTo: 'AllProductComponent', pathMatch: 'full' }, 








];
