import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  ngOnInit(): void {
    this.getallproducts();
    this.getallcategories();
  }
  loadding:boolean=false;
cat:string='';
products:any[]=[];
categories:any[]=[];
cartproduct:any[]=[];

constructor(private share:ProductsService){

}
getallproducts(){
  this.loadding=true
  this.share.getallrpoducts().subscribe((d:any)=>{
    this.products=d;
    this.loadding=false
  },error=>{
    alert("error")
  })
}
addtocart(event:any){
  console.log(event)
  if("cart" in localStorage){
    this.cartproduct=JSON.parse(localStorage.getItem("cart")!)
    let exist=this.cartproduct.find(item=>{
      item.item.id==event.item.id
      console.log(item);
    })
    if(exist){
      alert("product is alredy in your cart")
    }
    else{
      this.cartproduct.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartproduct))
    }
  }
  else{
    this.cartproduct.push(event);
    localStorage.setItem("cart",JSON.stringify(this.cartproduct))
  }
}

getallcategories(){
  this.loadding=true
  this.share.getallcategories().subscribe((d:any)=>{
    this.categories=d;
    this.loadding=false
  },error=>{
    alert("error")
  })
}
getfiltercategory(event:any){
  let value=event.target.value;
/*   if(value!=='all'){
    this.getproductcategory(value);
  }
  else{
    this.getallproducts();
  } */
  (value=='all')?this.getallproducts():this.getproductcategory(value);
  console.log(value)

}

getproductcategory(val:string){
  this.share.getproductsbycategory(val).subscribe((res:any)=>{
    console.log(res);
    this.products=res;
  })
}
/* getall(){
  this.share.getallrpoducts().subscribe((d:any)=>{
    console.log(d);
    this.products=d;
  },error=>{
    console.log(error.message)
  })
}
getelec(){
  this.cat='electronics'
  this.share.getallcategory(this.cat).subscribe((d:any)=>{
    console.log(d);
    this.products=d;
  },error=>{
    console.log(error.message)
  })
}
getjewe(){
  this.cat='jewelery'
  this.share.getallcategory(this.cat).subscribe((d:any)=>{
    console.log(d);
    this.products=d;
  },error=>{
    console.log(error.message)
  })
}
getmnclo(){
  this.cat="men's clothing"
  this.share.getallcategory(this.cat).subscribe((d:any)=>{
    console.log(d);
    this.products=d;
  },error=>{
    console.log(error.message)
  })
}
getwmclo(){
  this.cat="women's clothing"
  this.share.getallcategory(this.cat).subscribe((d:any)=>{
    console.log(d);
    this.products=d;
  },error=>{
    console.log(error.message)
  })
} */
}
