import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "./services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate() {
    let canActivate = this.userService.isLoggedIn();
    if(!canActivate) {
      this.router.navigateByUrl('/login');
    }
    return canActivate;
  }
}
