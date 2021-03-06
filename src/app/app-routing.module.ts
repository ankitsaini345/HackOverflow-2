import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { InitiativesComponent } from './initiatives/initiatives.component';

const routes: Routes = [
  { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'fund-transfer', component: FundTransferComponent },
  { path: 'initiatives', component: InitiativesComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'Register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'open-initiatives', loadChildren: './open-initiatives/open-initiatives.module#OpenInitiativesModule' },
  { path: 'idea-submission', loadChildren: './idea-submission/idea-submission.module#IdeaSubmissionModule' },
  { path: 'initiative', component: InitiativesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
