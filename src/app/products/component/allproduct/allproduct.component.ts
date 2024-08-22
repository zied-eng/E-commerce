import { NgFor } from '@angular/common';
import { Component,  OnInit} from '@angular/core';
import { ProductserviceService } from '../../service/productservice.service';
import { ProductComponent } from "../product/product.component";
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [NgFor, ProductComponent,RouterLink],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.scss'
})
export class AllproductComponent implements OnInit {

  products :any[] = []
  categories:any[]=[]
   productcart:any[]=[]



 

  constructor(private Service: ProductserviceService){}
  ngOnInit():void{
    this.getproduct()
    this.getcategories()
  }

getproduct(){
 
  this.Service.grtallproduct().subscribe((res:any)  =>{
  
  this.products=res

},
error => {alert(error)});

}

getcategories(){
 
  this.Service.grtcategories().subscribe((res:any)  =>{
 
    this.categories=res
  },
  error => {alert(error)});
  

}

filiter(Event:any){
  
let value= Event.target.value;
(value=="All" )?this.getproduct(): this.getproductcategories(value)
}

getproductcategories(keyword:string ){
 
  this.Service.filitercategories(keyword).subscribe((res:any)  =>{
   
    this.products=res
  });
}


addcart(Event:any){
if("cart" in localStorage){

  this.productcart = JSON.parse(localStorage.getItem("cart")!)
  let exist=this.productcart.find(item => item.item.id== Event.item.id)
  if(exist){
alert('product is already in you cart')

  } else{
    this.productcart.push(Event)
    localStorage.setItem("cart" ,JSON.stringify(this.productcart))
  }
}else{
  this.productcart.push(Event)
  localStorage.setItem("cart" ,JSON.stringify(this.productcart))
}





}












}