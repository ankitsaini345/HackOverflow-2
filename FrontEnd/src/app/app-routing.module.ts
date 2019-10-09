import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'open-initiatives', loadChildren: './open-initiatives/open-initiatives.module#OpenInitiativesModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
