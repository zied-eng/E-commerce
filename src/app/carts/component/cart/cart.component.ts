import {  CommonModule, NgFor} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,FormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {


  
 ngOnInit() {

 }


}