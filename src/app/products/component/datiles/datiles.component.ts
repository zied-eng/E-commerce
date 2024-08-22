import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../../service/productservice.service';


@Component({
  selector: 'app-datiles',
  standalone: true,
  imports: [],
  templateUrl: './datiles.component.html',
  styleUrl: './datiles.component.scss'
})
export class DatilesComponent implements OnInit { 
  id:any
  data:any =[]
  constructor( private route:ActivatedRoute ,private service: ProductserviceService){
   this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit() {
 this.getproduct()
  }

  getproduct(){

this.service.grtdatiles(this.id).subscribe(res=> {
this.data=res
})

  }

}
