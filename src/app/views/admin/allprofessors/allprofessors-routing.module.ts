import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllprofessorsComponent } from './allprofessors.component';

const routes: Routes = [
  {path:'',component:AllprofessorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllprofessorsRoutingModule { }
