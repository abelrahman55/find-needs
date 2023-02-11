import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiurl } from 'src/app/app.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getallrpoducts(){
    return this.http.get(`${apiurl}/products`)
  }
  getallcategory(cat:string){
    return this.http.get(`${apiurl}/products/category/${cat}`)
  }
  getallcategories(){
    return this.http.get(`${apiurl}/products/categories`)
  }
  getproductsbycategory(cat:any){
    return this.http.get(`${apiurl}/products/category/${cat}`)
  }
  getproductdetails(id:any){
    return this.http.get(`${apiurl}/products/${id}`)
  }
  constructor(private http:HttpClient) { }
}
