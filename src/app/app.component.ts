import { Component } from '@angular/core';
import { BkLayout } from '@uibakery/kit';
import { Router } from '@angular/router';

// import { AuthenticationService } from './_services';
// import { User } from './_models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  defaultLayout: BkLayout = {
    header: true,
    headerFixed: false,
    sidebar: true,
    sidebarFixed: false
  };

  // currentUser: User;

  // constructor(
  //   private router: Router,
  //   // private authenticationService: AuthenticationService
  // ) {
  //   // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  // }

  // logout() {
  //   // this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }

}
