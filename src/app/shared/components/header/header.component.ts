import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from "../login-button";
import { LogoutButtonComponent } from "../logout-button";
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { UserProfileComponent } from "../user-profile";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, LoginButtonComponent, LogoutButtonComponent, UserProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$;
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;
}
