import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ItemCardModule } from '../item-card/item-card.module';
import { ModalModule } from '../modal/modal.module';
import { ModalComponent } from '../modal/modal.component';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    ModalModule,
    CommonModule,
    ItemCardModule
  ],
  exports:[
    ViewComponent
  ],
  entryComponents:[
    ModalComponent
  ]
})
export class ViewModule { }
