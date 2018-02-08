import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  constructor(private userService: UserService, private router: Router) {
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
