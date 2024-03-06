import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEtudComponent } from './dashboard-etud.component';

const routes: Routes = [
  {path:'',component:DashboardEtudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEtudRoutingModule { }
