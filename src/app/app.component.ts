import { Component, Input } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule, NgForm, } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HeaderComponent, ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   profileForm = new FormGroup({
//     firstName: new FormControl('',[Validators.required]),
//     password: new FormControl('',[Validators.required, Validators.minLength(5)]),
//     email: new FormControl('',[Validators.required, Validators.maxLength(50)])
//   });
//   onSubmit(){
//     console.log(this.profileForm.value);
    
//   }
//  get firstName(){
//    return this.profileForm.get('firstName');
//  }
//  get password(){
//    return this.profileForm.get('password');
//  }
//  get email(){
//    return this.profileForm.get('email');
//  }
// userDetails:any;
// addDetails(val:NgForm){
// console.log(val);
// this.userDetails= val
// }
// title="angular project";
// date = new Date();
// amount = 1000;

// counter=0;
// updateCounter(){
//   this.counter++; 
// }
// productData:{
//   id: number;
//   name: string;
//   price: number;
// }[] | undefined;
// constructor(private productService: ProductService){
 
// }
// getProducts(){
//   this.productData= this.productService.getProducts();
// console.log(this.productData);
// }
productList:any;
constructor (private productService: ProductService){
}
ngOnInit(){
  this.productService.getProductList().subscribe((data:any)=>{
    console.log(data);
    this.productList= data.products;
  });
}
}
