import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCatastropheComponent } from './components/list-catastrophe/list-catastrophe.component';

const routes: Routes = [
  {
    path:'',
    component:ListCatastropheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatastropheAdminRoutingModule { }
