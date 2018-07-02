import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  template: `<div>
  <h3>Τα μόρια σας είναι:<span>{{ data | number :'1.0-0':'el'}}</span></h3>
  </div>
  <br/>
  <button mat-button class="btn" (click)="closeit()">Κλείσιμο</button>`
})
export class moriadialogComponent {
  constructor(
    public dialogRef: MatDialogRef<moriadialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  closeit(){
    this.dialogRef.close();
  }
}
