import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './views/admin/dashboard/dashboard.module';
import { DashboardEtudModule } from './views/etudiant/dashboard-etud/dashboard-etud.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardEnseignantModule } from './views/enseignant/dashboard-enseignant/dashboard-enseignant.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule,
    DashboardEtudModule,
    DashboardEnseignantModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
