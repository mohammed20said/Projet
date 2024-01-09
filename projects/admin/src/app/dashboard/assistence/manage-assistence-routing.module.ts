import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListAssistenceComponent } from './components/list-assistence/list-assistence.component';



const routes: Routes = [
  {
    path:'',
    component:ListAssistenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAssistenceRoutingModule { }
