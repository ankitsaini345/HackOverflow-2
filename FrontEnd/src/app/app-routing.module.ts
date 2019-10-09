import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path : 'fund-transfer', component : FundTransferComponent},
  { path : 'user-profile', component : UserProfileComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
