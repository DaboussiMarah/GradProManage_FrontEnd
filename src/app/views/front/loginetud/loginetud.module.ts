import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginetudRoutingModule } from './loginetud-routing.module';
import { LoginetudComponent } from './loginetud/loginetud.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginetudComponent
  ],
  imports: [
    CommonModule,
    LoginetudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginetudModule { }
