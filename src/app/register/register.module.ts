import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterContainer2Component } from './register-container2/register-container2.component';
import { SignUpForm3Component } from './sign-up-form3/sign-up-form3.component';
import { SharedModule } from '../shared/shared.module';
import {NbRadioModule, NbSelectModule} from '@nebular/theme';

@NgModule({
  declarations: [RegisterComponent, RegisterContainer2Component, SignUpForm3Component],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    NbRadioModule,
    NbSelectModule
  ]
})
export class RegisterModule { }
