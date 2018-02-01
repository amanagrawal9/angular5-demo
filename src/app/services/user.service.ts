import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  private baseUrl = 'https://apidev.cloudtimer.nl/';

  constructor(
    private http: HttpClient) { }

  login(user) {
    return this.http.post<any>(this.baseUrl + 'auth/login', user);
  }

}
