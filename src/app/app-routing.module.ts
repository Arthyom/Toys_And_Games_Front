import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'list', component: ListComponent},
  {path:'home', component: HomeComponent},
  {path:'form/:type', component: FormComponent},
  {path:'form/:type/:id', component: FormComponent},

  {path:'view/:id', component: ViewComponent},


  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
