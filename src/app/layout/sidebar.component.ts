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
      children: null,
    },
    {
      title: 'Fund Transfer',
      link: '/fund-transfer',
      children: null
    },
    {
      title: 'User Profile',
      link: '/user-profile',
      children: null,
    },
    {
      title: 'Register',
      link: '/Register',
      children: null
    },
    {
      title: 'Open Initiatives',
      link: '/open-initiatives',
      children: null
    },
    {
      title: 'Idea Submission',
      link: '/idea-submission',
      children: null
    },
    {
      title: 'Initiative',
      link: '/initiative',
      children: null
    }

  ];

}
