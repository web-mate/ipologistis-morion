import { Component, ViewChild } from '@angular/core';
import { appService } from '../../appservice.service';
import { NgForm } from '@angular/forms';
import { MatDialog} from '@angular/material';
import { moriadialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-anhtropistikes',
  templateUrl: './anhtropistikes.component.html',
  styleUrls: ['./anhtropistikes.component.css'],
})
export class AnhtropistikesComponent {
  moriaproto:Number;
  moriatrito:Number;
  islatinika= true;
  mathimakateuthinsis=1;
  @ViewChild('f') ipologisisForm:NgForm;

  constructor(private appservice:appService,public dialog: MatDialog ) { }

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
    this.openDialog(this.moriaproto);
  }
  if (this.mathimakateuthinsis == 2){
    var gloosa = this.ipologisisForm.value.gloosaproto;
    var arxaia = this.ipologisisForm.value.arxaiaproto;
    var istoria = this.ipologisisForm.value.istoriaproto;
    var biologia = this.ipologisisForm.value.biologiaproto;
    this.moriatrito = (((gloosa+arxaia+istoria+biologia)*2)+(biologia*0.9)+(gloosa*0.4))*100;
    this.openDialog(this.moriatrito);
  }

  }

  openDialog(moriapediou): void {
    const dialogRef = this.dialog.open(moriadialogComponent, {
      width: '300px',
      data: moriapediou
    });
  }

}


