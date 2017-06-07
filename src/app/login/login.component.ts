import { User } from './user';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  login(user:User){
    this._auth.doLogin(user);
    console.log(user)
  }

}
