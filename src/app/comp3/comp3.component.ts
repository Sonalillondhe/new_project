import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {

  dateOfBirth:string="";
  age:number = 0 ;

  calculateAge(e:any)
  { 
   let birthDate = e.target.value ;
    if (birthDate) 
    {
      var timeDiff = Math.abs(Date.now() - new Date(birthDate).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      console.log(this.age);
    } 
  }
}
