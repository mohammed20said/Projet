import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListBesoinComponent } from './components/list-besoin/list-besoin.component';



const routes: Routes = [
  {
    path:'',
    component:ListBesoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBesoinRoutingModule { }
