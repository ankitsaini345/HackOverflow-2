import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboard } from './Idashboard';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  initiativeData$: Observable<IDashboard[]>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.initiativeData$ =  this.dashboardService.getInitivateData();
  }

}
