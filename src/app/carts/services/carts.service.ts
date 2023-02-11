import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiurl } from 'src/app/app.component';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }
  createnewcart(model:any){
    return this.http.post(`${apiurl}/carts`,model)
  }
}
