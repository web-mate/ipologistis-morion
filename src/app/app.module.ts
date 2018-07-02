import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PedioComponent } from './pedio/pedio.component';
import { MathimaComponent } from './mathima/mathima.component';
import { AnhtropistikesComponent } from './pedio/anhtropistikes/anhtropistikes.component';
import { ThetikesComponent } from './pedio/thetikes/thetikes.component';
import { PliroforikisComponent } from './pedio/pliroforikis/pliroforikis.component';
import { appService } from './appservice.service';
import { CustomFormsModule } from 'ng2-validation';
import { registerLocaleData } from '@angular/common';
import localeel from '@angular/common/locales/el';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatDialogModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule } from '@angular/material';
import { moriadialogComponent } from './pedio/dialog/dialog.component';

registerLocaleData(localeel, 'el');

const appRoutes:Routes = [
  {path:'', component: AnhtropistikesComponent},
 {path:'anthropistikes', component: AnhtropistikesComponent},
 {path:'thetikes', component: ThetikesComponent},
 {path:'pliroforikis', component: PliroforikisComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PedioComponent,
    MathimaComponent,
    AnhtropistikesComponent,
    ThetikesComponent,
    PliroforikisComponent,
    moriadialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CustomFormsModule,
    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule,MatDialogModule
  ],
  providers: [appService,
    {
      provide: LOCALE_ID,
      useValue: "el"
    }],
  bootstrap: [AppComponent],
  entryComponents: [moriadialogComponent]
})
export class AppModule { }
