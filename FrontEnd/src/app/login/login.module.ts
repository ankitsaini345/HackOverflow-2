import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginContainer1Component } from './login-container1/login-container1.component';
import { SignUpForm1Component } from './sign-up-form1/sign-up-form1.component';
import { SharedModule } from '../shared/shared.module';
import { InvestorPageComponent } from './investor-page/investor-page.component';
import { LoginContainer2Component } from './investor-page/login-container2/login-container2.component';
import { SignUpForm2Component } from './investor-page/sign-up-form2/sign-up-form2.component';

@NgModule({
  declarations: [LoginComponent, LoginContainer1Component, SignUpForm1Component, InvestorPageComponent, LoginContainer2Component, SignUpForm2Component],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
