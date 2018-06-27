import { Component, OnInit, ViewChild } from '@angular/core';
import { appService } from '../../appservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-thetikes',
  templateUrl: './thetikes.component.html',
  styleUrls: ['./thetikes.component.css']
})
export class ThetikesComponent implements OnInit {

  moriadeutero:Number;
  moriatrito:Number;
  isMathimatika= true;
  mathimakateuthinsis=1;
  @ViewChild('f') ipologisisForm:NgForm;

  constructor(private appservice:appService ) { }

  ngOnInit() {
  }


  changelesson(mathima){
    if (mathima.value == 1){
      this.isMathimatika = true;
      this.mathimakateuthinsis=1;
    }
    if (mathima.value == 2){
      this.isMathimatika = false;
      this.mathimakateuthinsis=2;
    }
  }

  onSubmit(form:NgForm){
  if (this.mathimakateuthinsis == 1){
    var glosa = this.ipologisisForm.value.glossa;
    var fisiki = this.ipologisisForm.value.fisiki;
    var ximia = this.ipologisisForm.value.ximia;
    var mathimatika = this.ipologisisForm.value.mathimatika;
    this.moriadeutero = (((glosa+fisiki+ximia+mathimatika)*2)+(mathimatika*1.3)+(fisiki*0.7))*100;
  }
  if (this.mathimakateuthinsis == 2){
    var glosa = this.ipologisisForm.value.glossa;
    var fisiki = this.ipologisisForm.value.fisiki;
    var ximia = this.ipologisisForm.value.ximia;
    var biologia = this.ipologisisForm.value.biologia;
    this.moriatrito = (((glosa+fisiki+ximia+biologia)*2)+(biologia*1.3)+(ximia*0.7))*100;
  }

  }

}
