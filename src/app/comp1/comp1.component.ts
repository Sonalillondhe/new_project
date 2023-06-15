import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  message1:string="Welcome to our angular learning";
  summary:string="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, dignissimos.";
  todaysDate = new Date();
  productPrice:number=394751;
  average:number = 3456444544.4711878798;
}
