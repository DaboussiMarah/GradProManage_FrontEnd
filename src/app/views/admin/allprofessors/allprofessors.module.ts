import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllprofessorsRoutingModule } from './allprofessors-routing.module';
import { AllprofessorsComponent } from './allprofessors.component';


@NgModule({
  declarations: [
    AllprofessorsComponent
  ],
  imports: [
    CommonModule,
    AllprofessorsRoutingModule,
    FormsModule
  ]
})
export class AllprofessorsModule { }
