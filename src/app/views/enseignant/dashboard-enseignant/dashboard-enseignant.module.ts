import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEnseignantRoutingModule } from './dashboard-enseignant-routing.module';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';


@NgModule({
  declarations: [
    DashboardEnseignantComponent
  ],
  imports: [
    CommonModule,
    DashboardEnseignantRoutingModule
  ]
})
export class DashboardEnseignantModule { }
