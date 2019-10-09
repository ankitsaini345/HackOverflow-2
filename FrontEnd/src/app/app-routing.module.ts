import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'Register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'open-initiatives', loadChildren: './open-initiatives/open-initiatives.module#OpenInitiativesModule' },
  { path: 'idea-submission', loadChildren: './idea-submission/idea-submission.module#IdeaSubmissionModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
