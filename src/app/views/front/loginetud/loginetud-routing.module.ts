import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginadminComponent } from '../../admin/loginadmin/loginadmin/loginadmin.component';
import { LoginetudComponent } from './loginetud/loginetud.component';

const routes: Routes = [
  {path:'',component:LoginetudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginetudRoutingModule { }
