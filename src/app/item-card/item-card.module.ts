import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card.component';
import { GlobalPipesModule } from '../pipes/globals-pipes.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../modal/modal.module';
import { ModalComponent } from '../modal/modal.component';



@NgModule({
  declarations: [
    ItemCardComponent
  ],
  imports: [
    RouterModule,
    GlobalPipesModule,
    ModalModule,
    CommonModule
  ],
  exports:[
    ItemCardComponent
  ],
  entryComponents:[
    ModalComponent
  ]
})
export class ItemCardModule { }
