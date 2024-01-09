import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuardGuard } from '../core/guards/admin-guard.guard';

const routes: Routes = [

{
  path:'',
  canActivateChild:[AdminGuardGuard],
  component:LayoutComponent,
  children:[
    {
      path:'tasks', 
      loadChildren: () => import('./tasks-admin/tasks-admin.module').then(m => m.TasksAdminModule)
    },
    {
      path:'users', 
      loadChildren: () => import(`./manage-users/manage-users.module`).then(m => m.ManageUsersModule)
    },

    {
      path:'catastrophe', 
      loadChildren: () => import(`./catastrophe/manage-catastrophe.module`).then(m => m.ManageCatastropheModule)
    },
    {
      path:'aide', 
      loadChildren: () => import(`./aide/manage-aide.module`).then(m => m.ManageAideModule)
    },
    {
      path:'besoin', 
      loadChildren: () => import(`./besoin/manage-besoin.module`).then(m => m.ManageBesoinModule)
    },
    {
      path:'logistique', 
      loadChildren: () => import(`./logistique/manage-logistique.module`).then(m => m.ManageLogistiqueModule)
    },
    {
      path:'assistence', 
      loadChildren: () => import(`./assistence/manage-assistence.module`).then(m => m.ManageAssistenceModule)
    },
    {
      path:'volontariat', 
      loadChildren: () => import(`./volontariat/manage-volontariat.module`).then(m => m.ManageVolontariatModule)
    },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
