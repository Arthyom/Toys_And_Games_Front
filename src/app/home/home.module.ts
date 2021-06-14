import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ItemCardModule } from '../item-card/item-card.module';
import { JumbotronModule } from '../jumbotron/jumbotron.module';
import { ModalComponent } from '../modal/modal.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ItemCardModule,
    JumbotronModule,
    CommonModule
  ],
  entryComponents:[
    ModalComponent
  ]
})
export class HomeModule { }
