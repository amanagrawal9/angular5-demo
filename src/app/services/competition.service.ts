import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CompetitionService {

  private baseUrl = 'https://apidev.cloudtimer.nl/';

  constructor(
    private http: HttpClient) { }

  login(data) {
    return this.http.post<any>(this.baseUrl + 'auth/login', data);
  }

  getCompetitions(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

}
