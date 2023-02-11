import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
[x: string]: any;
totalprice:number=0;
  ngOnInit(): void {
    this.getcartproducts();
    this.gettotalprice();
  }
  cartproducts:any[]=[];
  getcartproducts(){
    if("cart" in localStorage){
      this.cartproducts=JSON.parse(localStorage.getItem("cart")!);
    }
    console.log(this.cartproducts);
  }
  gettotalprice(){
    this.cartproducts.forEach((product)=>{
      this.totalprice+=((product.quantity*product.item.value.price));
      this.totalprice.toFixed(0);
    })
  }
  minamount(index:number){
    if(this.cartproducts[index].quantity>0){
      this.cartproducts[index].quantity--;
      this.gettotalprice();
      localStorage.setItem("cart",JSON.stringify(this.cartproducts));
    }
    if(this.cartproducts[index].quantity===0){
      console.log("plapla")
    this.cartproducts.filter((product)=>product.item.value.id!==this.cartproducts[index].item.id)
    }
/*  console.log(id)
   this.cartproducts.forEach((product)=>{
    if(product.item.value.id===id){
      product.quantity-=1;
      console.log(this.cartproducts)
    }
  }) */
  }
  addamount(index:number){
    this.cartproducts[index].quantity++;
    this.gettotalprice();
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  }
  detectedchange(){
    this.gettotalprice();
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  }
  deleteproduct(index:number){
    this.gettotalprice();
    this.cartproducts.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  }
  clear(){
    this.cartproducts=[];
    this.gettotalprice();
/*     this.cartproducts.splice(0,this.cartproducts.length)*/
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  }
  success:boolean=false;
  addcart(){
    let products=this.cartproducts.map((item)=>{
      return {productid:item.item.id,quantity:item.quantity}
    })
    let model={
      userid:5,
      date:new Date(),
      products:products
    }
    this.cartser.createnewcart(model).subscribe((res)=>{
      this.success=true
    })
    console.log(model);
  }
  constructor(private cartser:CartsService){}

}
