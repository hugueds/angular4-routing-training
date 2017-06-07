import { Router } from '@angular/router';
import { User } from './user';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  showMenu = new EventEmitter<boolean>();

  private isAuth: boolean = false;

  constructor(private router: Router) { }

  doLogin(user: User) {
    if (user.username === 'a' && user.password == '123') {
      this.isAuth = true;
      this.showMenu.emit(true);
      this.router.navigate(['/']);
    }
    else {
      this.isAuth = true;
      this.showMenu.emit(false);
    }

  }

  getAuth(){
    return this.isAuth;
  }

}
