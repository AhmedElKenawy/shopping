import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  loggedInUser$ :  Observable<User | null> ; 

  constructor( private authService : AuthService){

    this.loggedInUser$ = this.authService.currentUser$;

  }
  logout(){
    this.authService.logout();
    location.reload();
  }

}
