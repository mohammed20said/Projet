import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AddVolontariatComponent } from './volontariat/components/add-volontariat/add-volontariat.component';
import { ListVolontariatComponent } from './volontariat/components/list-volontariat/list-volontariat.component';







@NgModule({
  declarations: [
    LayoutComponent,
    
   
    

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
