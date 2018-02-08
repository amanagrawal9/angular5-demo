import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  private baseUrl = 'https://apidev.cloudtimer.nl/';

  constructor(
    private http: HttpClient) { }

  login(user) {
    localStorage.setItem('loggedIn', 'yes');
  }

  isLoggedIn() {
    return localStorage.getItem('loggedIn') ? true : false;
  }

  logout() {
    localStorage.removeItem('loggedIn');
  }

}
