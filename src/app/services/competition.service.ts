import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CompetitionService {

  private baseUrl = 'https://apidev.cloudtimer.nl/';

  competitions: any[] = [{
    name: 'MPL',
    sport_type: 'Cricket',
    coordinator_name: 'ABC'
  }];

  constructor(
    private http: HttpClient) { }

  login(data) {
    return this.http.post<any>(this.baseUrl + 'auth/login', data);
  }

  getCompetitions(): any[] {
    return this.competitions;
  }

}
