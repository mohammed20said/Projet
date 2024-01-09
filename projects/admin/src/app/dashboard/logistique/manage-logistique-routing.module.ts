import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListLogistiqueComponent } from './components/list-logistique/list-logistique.component';



const routes: Routes = [
  {
    path:'',
    component:ListLogistiqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLogistiqueRoutingModule { }
