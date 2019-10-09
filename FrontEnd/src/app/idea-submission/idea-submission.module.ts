import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaSubmissionRoutingModule } from './idea-submission-routing.module';
import { IdeaSubmissionComponent } from './idea-submission.component';
import { ProfileContainer11Component } from './profile-container11/profile-container11.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IdeaSubmissionComponent, ProfileContainer11Component],
  imports: [
    CommonModule,
    IdeaSubmissionRoutingModule,
    SharedModule
  ]
})
export class IdeaSubmissionModule { }
