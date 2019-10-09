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
      title: 'Login',
      link: '/login',
      children: null
    },
    {
      title: 'Open Initiatives',
      link: '/open-initiatives',
      children: null
    }
  ];

}
