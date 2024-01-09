import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCatastropheComponent } from './components/list-catastrophe/list-catastrophe.component';
import { CatastropheComponent } from './components/addcatastrophe/catastrophe.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatastropheAdminRoutingModule } from './catastrophe-admin-routing.module';



@NgModule({
  declarations: [
    ListCatastropheComponent,
    CatastropheComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CatastropheAdminRoutingModule
  ]
})
export class ManageCatastropheModule { }
