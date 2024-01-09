import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageAideRoutingModule } from '../aide/manage-aide-routing.module';
import { ListBesoinComponent } from './components/list-besoin/list-besoin.component';
import { AddBesoinComponent } from './components/add-besoin/add-besoin.component';
import { ManageBesoinRoutingModule } from './manage-besoin-routing.module';



@NgModule({
  declarations: [
    ListBesoinComponent,
    AddBesoinComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ManageBesoinRoutingModule
  ]
})
export class ManageBesoinModule { }
