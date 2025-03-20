import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor() {
  //   console.log("Product service ");
  //  }
  //  getProducts(){
  //    return [
  //      {id:1, name:'Samsung', price:50000},
  //      {id:2, name:'Apple', price:80000},
  //      {id:3, name:'One Plus', price:40000}
  //    ];
  //  }

  constructor(private http: HttpClient) { }
  getProductList(){
    const url= "https://dummyjson.com/products";
    return this.http.get(url);
  }
}

