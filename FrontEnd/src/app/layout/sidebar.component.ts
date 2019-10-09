import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/home',
      children: null
    },
    {
      title: 'Fund Transfer',
      link: '/fund-transfer',
      children: null
    },
    {
      title: 'User Profile',
      link: '/user-profile',
      children: null
    }

  ];

}
