import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInput
} from '@angular/material';

@NgModule({
  imports: [
    MatInput,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatInput,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {}