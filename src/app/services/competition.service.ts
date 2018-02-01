import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CompetitionService {

  private baseUrl = 'https://apidev.cloudtimer.nl/';

  constructor(
    private http: HttpClient) { }

  login(data) {
    return this.http.post<any>(this.baseUrl + 'auth/login', data);
  }

  getCompetitions(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/competitions?last=15&status=open');
  }

}
