import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss']
})
export class InitiativesComponent implements OnInit {

  data: any;
  constructor(private dataService: DashboardService) { }

  ngOnInit() {
this.data = this.dataService.getInitivateData();
  }

}
