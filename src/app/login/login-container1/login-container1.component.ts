import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILogin } from '../sign-up-form1/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-container1',
  templateUrl: './login-container1.component.html',
  styleUrls: ['./login-container1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainer1Component implements OnInit {

  constructor(
    private router: Router
  ) { }
  username: string;

  ngOnInit() {

  }
  login(user: ILogin) : void {
    if(user.email === 'admin' && user.password === 'admin'){
     this.router.navigate(['/fund-transfer']);
    }else {
      alert("Invalid credentials");
    }
  } 


}
