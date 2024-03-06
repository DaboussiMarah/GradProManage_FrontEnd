import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddprofessorRoutingModule } from './addprofessor-routing.module';
import { AddprofessorComponent } from './addprofessor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddprofessorComponent
  ],
  imports: [
    CommonModule,
    AddprofessorRoutingModule,
    FormsModule
  ]
})
export class AddprofessorModule { }
