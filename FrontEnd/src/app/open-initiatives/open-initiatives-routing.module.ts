import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenInitiativesComponent } from './open-initiatives.component';

const routes: Routes = [
  { path: '', component: OpenInitiativesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenInitiativesRoutingModule { }
