import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  firstname:string='sonali';
  lastname:string='londhe';
  personalObj : any = 
  {
    fName:"Rohit",
    mobileNo:8989898989,
    address:{
      city:"Pune",
      state:"Maharashtra"
    }  
  }

  isDisable:boolean = false ;
}
