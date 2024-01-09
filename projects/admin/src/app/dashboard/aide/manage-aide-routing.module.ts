import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListAideComponent } from './components/list-aide/list-aide.component';

const routes: Routes = [
  {
    path:'',
    component:ListAideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAideRoutingModule { }
