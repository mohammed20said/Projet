import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageAideRoutingModule } from './manage-aide-routing.module';
import { AddAideComponent } from './components/add-aide/add-aide.component';
import { ListAideComponent } from './components/list-aide/list-aide.component';



@NgModule({
  declarations: [
    AddAideComponent,
    ListAideComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ManageAideRoutingModule
  ]
})
export class ManageAideModule { }
