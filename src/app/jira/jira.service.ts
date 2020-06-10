import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jira} from './jira';
import {Observable} from 'rxjs';
import {async} from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(private http: HttpClient) {
  }

  getJira(startAtJira: number, maxResultsJira: number): Observable<Jira> {
    return this.http.get<any>('./assets/jira.json', {
      params: {
        startAt: startAtJira.toString(),
        maxResults: maxResultsJira.toString()
      }
    });
  }

}
