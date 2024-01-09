import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageVolontariatRoutingModule } from './manage-volontariat-routing.module';
import { ListVolontariatComponent } from './components/list-volontariat/list-volontariat.component';
import { AddVolontariatComponent } from './components/add-volontariat/add-volontariat.component';



@NgModule({
  declarations: [
    ListVolontariatComponent,
    AddVolontariatComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ManageVolontariatRoutingModule
  ]
})
export class ManageVolontariatModule { }
