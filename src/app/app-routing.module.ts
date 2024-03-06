import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { UserHomeComponent } from './layouts/user-home/user-home.component';
import { AuthEnseignantComponent } from './layouts/auth-enseignant/auth-enseignant.component';
import { DashboardEnseignantComponent } from './views/enseignant/dashboard-enseignant/dashboard-enseignant/dashboard-enseignant.component';
import { GuardensGuard } from './views/guards/guardens.guard';
import { GuarduserGuard } from './views/guards/guarduser.guard';
import { DashboardEtudComponent } from './views/etudiant/dashboard-etud/dashboard-etud.component';



const routes: Routes = [
  {
    path:'',component:FrontLayoutComponent,children:[
      {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
      {path:'loginetud',loadChildren:()=>import('./views/front/loginetud/loginetud.module').then(m=>m.LoginetudModule)},
      {path:'registeretud',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},

    ]
  },
  
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [GuardadminGuard],
    children: [
      { path: '', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'etudiants', loadChildren: () => import('./views/admin/allstudents/allstudents.module').then(m => m.AllstudentsModule) },
      { path: 'enseignants', loadChildren: () => import('./views/admin/allprofessors/allprofessors.module').then(m => m.AllprofessorsModule) },
      { path: 'ajouter_etudiant', loadChildren: () => import('./views/admin/addstudent/addstudent.module').then(m => m.AddstudentModule) },

      { path: 'ajouter_enseignant', loadChildren: () => import('./views/admin/addprofessor/addprofessor.module').then(m => m.AddprofessorModule) },
    ],
  },
  {path:'admin/login', component:AuthAdminLayoutComponent},
  {path:'user_home', component:UserHomeComponent},
  {path:'loginens', component:AuthEnseignantComponent},

  { path: 'espace_etudiant', component:DashboardEtudComponent , canActivate: [GuarduserGuard] },

  { path: 'espace_enseignant', component:DashboardEnseignantComponent , canActivate: [GuardensGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
