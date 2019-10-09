import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenInitiativesRoutingModule } from './open-initiatives-routing.module';
import { OpenInitiativesComponent } from './open-initiatives.component';
import { Statistics1Component } from './statistics1/statistics1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OpenInitiativesComponent, Statistics1Component],
  imports: [
    CommonModule,
    OpenInitiativesRoutingModule,
    SharedModule
  ]
})
export class OpenInitiativesModule { }
