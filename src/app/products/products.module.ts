import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    RouterModule,
  ]
})
export class ProductsModule { }
