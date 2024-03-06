import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofessorComponent } from './addprofessor.component';

const routes: Routes = [
  {path:'',component:AddprofessorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddprofessorRoutingModule { }
