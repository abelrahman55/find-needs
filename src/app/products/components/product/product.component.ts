import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input () prod:any={};
  @Input () id:any;

  @Output() item=new EventEmitter();
  addbutton:boolean=false;
  amount:number=0;
  add(){
    this.item.emit({item:this.prod,quantity:this.amount})
  }
}
/* {item:this.prod,quantity:this.amount} */
