import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  productdet:any={};
  ngOnInit(): void {
    this.getproductdetails();
  }
  getproductdetails(){
    this.share.getproductdetails(this.id).subscribe((d:any)=>{
      this.productdet=d;
    },error=>{
      this.loadding=false;
      alert("error")
    })
  }
  loadding:boolean=false;
  id:any=0;
  constructor(private share:ProductsService,private route:ActivatedRoute){
    this.loadding=true
    this.id=this.route.snapshot.paramMap.get('id')
    this.loadding=false
  }
}
