import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ILogin } from './login';

@Component({
  selector: 'app-sign-up-form1',
  templateUrl: './sign-up-form1.component.html',
  styleUrls: ['./sign-up-form1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpForm1Component implements OnInit {

  user: ILogin = {
    email: '',
    password: ''
  };

  @Output() userLogin = new EventEmitter<ILogin>();
  constructor() { }

  ngOnInit() {
  }

  login() {
    this.userLogin.emit(this.user);
  }

}
