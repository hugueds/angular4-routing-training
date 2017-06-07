import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  showMenu: boolean = false;

  constructor(private _auth:AuthService){

  }

  ngOnInit(){
    this._auth.showMenu.subscribe( 
      show => {
        this.showMenu = show 
        console.log(show)
      }
  )
  }


}
