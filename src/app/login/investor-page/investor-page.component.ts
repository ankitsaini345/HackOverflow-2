import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-investor-page',
  templateUrl: './investor-page.component.html',
  styleUrls: ['./investor-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
