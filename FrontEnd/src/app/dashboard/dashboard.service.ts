import { Injectable } from '@angular/core';
import { IDashboard } from './Idashboard';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  data: IDashboard[] = [];

  constructor() { }

  getInitivateData() {
    this.data = [
      {
        id: 1,
        intiativeName: 'Go Green',
        name: 'Ankit',
        country: 'India',
        email: 'test@gmail.com',
        initiativeDate: new Date('11-Mar-2019'),
        amoutNeeded: 1000,
        status: 'Open'
      },
      {
        id: 2,
        intiativeName: 'Save Oceans',
        name: 'Ankit',
        country: 'India',
        email: 'test@gmail.com',
        initiativeDate: new Date('11-Mar-2019'),
        amoutNeeded: 1000,
        status: 'Open'
      },
      {
        id: 3,
        intiativeName: 'Go Green',
        name: 'Ankit',
        country: 'India',
        email: 'test@gmail.com',
        initiativeDate: new Date('11-Mar-2019'),
        amoutNeeded: 1000,
        status: 'Open'
      },
      {
        id: 4,
        intiativeName: 'Go Green',
        name: 'Ankit',
        country: 'India',
        email: 'test@gmail.com',
        initiativeDate: new Date('11-Mar-2019'),
        amoutNeeded: 1000,
        status: 'Open'
      },
    ];
    return of(this.data);
  }

}
