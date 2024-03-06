import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEtudRoutingModule } from './dashboard-etud-routing.module';
import { DashboardEtudComponent } from './dashboard-etud.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardEtudComponent
  ],
  imports: [
    CommonModule,
    DashboardEtudRoutingModule,
    FormsModule,
    
    
  ]
})
export class DashboardEtudModule { }
