import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageAssistenceRoutingModule } from './manage-assistence-routing.module';
import { ListAssistenceComponent } from './components/list-assistence/list-assistence.component';
import { AddAssistenceComponent } from './components/add-assistence/add-assistence.component';



@NgModule({
  declarations: [
    ListAssistenceComponent,
    AddAssistenceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ManageAssistenceRoutingModule
  ]
})
export class ManageAssistenceModule { }
