import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services';
import { SwitchLanguageComponent } from 'src/app/shared/components/switch-language/switch-language.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    SwitchLanguageComponent, 
    CommonModule,
     TranslateModule, 
     SharedModule,
    MatToolbarModule,
    MatMenuModule,]
})
export class HeaderComponent {

  loggedInUser$: Observable<User | null>;

  constructor(private authService: AuthService) {

    this.loggedInUser$ = this.authService.currentUser$;

  }
  logout() {
    this.authService.logout();
    location.reload();
  }

}
