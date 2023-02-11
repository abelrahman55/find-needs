import { CartsModule } from './carts/carts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './products/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    CartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
