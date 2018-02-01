import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    return localStorage.getItem('authToken') ? true: false;
  }
}
