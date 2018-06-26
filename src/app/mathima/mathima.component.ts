import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mathima',
  templateUrl: './mathima.component.html',
  styleUrls: ['./mathima.component.css']
})
export class MathimaComponent implements OnInit {
 
  constructor(private router:Router) { }

  ngOnInit() {

  }

  changeShape(shape){
  
    if (shape.value == 1){
      this.router.navigate(['/anthropistikes']);
    
    }
    if (shape.value == 2){
      this.router.navigate(['/thetikes']);
    }
    if (shape.value == 3){
      this.router.navigate(['/pliroforikis']);
    }
  
    console.log(shape.value);
  }

}
