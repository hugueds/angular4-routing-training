import { Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot,  } from '@angular/router';

import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
 

  constructor( 
    private _auth:AuthService,
    private _router: Router
              ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean> | boolean {

    if ( this._auth.getAuth()){      
      return true;
    }

    this._router.navigate(['/login']);
    
    return false; 

  }

}
