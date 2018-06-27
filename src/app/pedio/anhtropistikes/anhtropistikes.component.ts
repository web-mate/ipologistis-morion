import { Component, OnInit, ViewChild } from '@angular/core';
import { appService } from '../../appservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-anhtropistikes',
  templateUrl: './anhtropistikes.component.html',
  styleUrls: ['./anhtropistikes.component.css'],
})
export class AnhtropistikesComponent implements OnInit {
  moriaproto:Number;
  moriatrito:Number;
  islatinika= true;
  mathimakateuthinsis=1;
  @ViewChild('f') ipologisisForm:NgForm;

  constructor(private appservice:appService ) { }

  ngOnInit() {
  }


  changelesson(mathima){
    if (mathima.value == 1){
      this.islatinika = true;
      this.mathimakateuthinsis=1;
    }
    if (mathima.value == 2){
      this.islatinika = false;
      this.mathimakateuthinsis=2;
    }
  }

  onSubmit(form:NgForm){
  if (this.mathimakateuthinsis == 1){
    var gloosa = this.ipologisisForm.value.gloosaproto;
    var arxaia = this.ipologisisForm.value.arxaiaproto;
    var istoria = this.ipologisisForm.value.istoriaproto;
    var latinika = this.ipologisisForm.value.latinikaproto;
    this.moriaproto = (((gloosa+arxaia+istoria+latinika)*2)+(arxaia*1.3)+(istoria*0.7))*100;
  }
  if (this.mathimakateuthinsis == 2){
    var gloosa = this.ipologisisForm.value.gloosaproto;
    var arxaia = this.ipologisisForm.value.arxaiaproto;
    var istoria = this.ipologisisForm.value.istoriaproto;
    var biologia = this.ipologisisForm.value.biologiaproto;
    this.moriatrito = (((gloosa+arxaia+istoria+biologia)*2)+(biologia*0.9)+(gloosa*0.4))*100;
  }

  }

}
