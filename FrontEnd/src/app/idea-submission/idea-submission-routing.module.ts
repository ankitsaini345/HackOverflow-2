import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaSubmissionComponent } from './idea-submission.component';

const routes: Routes = [
  { path: '', component: IdeaSubmissionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaSubmissionRoutingModule { }
