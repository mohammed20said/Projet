import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListVolontariatComponent } from './components/list-volontariat/list-volontariat.component';



const routes: Routes = [
  {
    path:'',
    component:ListVolontariatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageVolontariatRoutingModule { }
