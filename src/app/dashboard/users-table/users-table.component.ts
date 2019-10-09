import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IDashboard } from '../Idashboard';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent implements OnInit {

  @Input() data: IDashboard[];
  constructor() { }

  ngOnInit() {
  }

}
