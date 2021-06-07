import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import { RouterModule } from '@angular/router';
import { JumbotronModule } from '../jumbotron/jumbotron.module';



@NgModule({
  declarations: [ListComponent, ItemComponent, HeaderItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    JumbotronModule
  ],
  exports:[
    ListComponent
  ]
})
export class ListModule { }
