import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageLogistiqueRoutingModule } from './manage-logistique-routing.module';
import { ListLogistiqueComponent } from './components/list-logistique/list-logistique.component';
import { AddLogistiqueComponent } from './components/add-logistique/add-logistique.component';



@NgModule({
  declarations: [
    ListLogistiqueComponent,
    AddLogistiqueComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ManageLogistiqueRoutingModule
  ]
})
export class ManageLogistiqueModule { }
