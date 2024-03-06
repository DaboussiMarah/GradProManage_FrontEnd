import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';

const routes: Routes = [
  {path:'',component:DashboardEnseignantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEnseignantRoutingModule { }
