import { moriadialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { appService } from '../../appservice.service';
import { NgForm } from '@angular/forms';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-pliroforikis',
  templateUrl: './pliroforikis.component.html',
  styleUrls: ['./pliroforikis.component.css']
})

export class PliroforikisComponent implements OnInit {
  submitted = false;
  moriatrito:Number;
  moriatetarto:Number;
  isbiologia= true;
  mathimakateuthinsis=1;
  @ViewChild('f') ipologisisForm:NgForm;

  constructor(private appservice:appService,public dialog: MatDialog ) { }

  ngOnInit() {
  }


  changelesson(mathima){
    if (mathima.value == 1){
      this.isbiologia = true;
      this.mathimakateuthinsis=1;
    }
    if (mathima.value == 2){
      this.isbiologia = false;
      this.mathimakateuthinsis=2;
    }
  }

  onSubmit(form:NgForm){
  if (this.mathimakateuthinsis == 1){
    var glosa = this.ipologisisForm.value.glossa;
    var mathimatika = this.ipologisisForm.value.mathimatika;
    var aepp = this.ipologisisForm.value.aepp;
    var biologia = this.ipologisisForm.value.biologia;
    this.moriatrito =(((glosa+mathimatika+aepp+biologia)*2)+(biologia*0.9)+(glosa*0.4))*100;
    this.openDialog(this.moriatrito);
  }
  if (this.mathimakateuthinsis == 2){
    var glosa = this.ipologisisForm.value.glossa;
    var mathimatika = this.ipologisisForm.value.mathimatika;
    var aepp = this.ipologisisForm.value.aepp;
    var aot = this.ipologisisForm.value.aot;
    this.moriatetarto = (((glosa+mathimatika+aepp+aot)*2)+(mathimatika*1.3)+(aot*0.7))*100;
    this.openDialog(this.moriatetarto);
  }
  this.submitted=true;

  }
  openDialog(moriapediou): void {
    const dialogRef = this.dialog.open(moriadialogComponent, {
      width: '300px',
      data: moriapediou
    });
  }
}
