import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    NavComponent
  ],
  entryComponents:[
    ModalComponent
  ]
})
export class NavModule { }
