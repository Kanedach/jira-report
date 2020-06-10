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

  getJira(startAtJira: Observable<number>, maxResultsJira: Observable<number>): Observable<Jira> {
    let start: string;
    let max: string;
    startAtJira.subscribe(res => start = res.toString());
    maxResultsJira.subscribe(res => max = res.toString());
    return this.http.get<any>('./assets/jira.json', {
      params: {
        startAt: start,
        maxResults: max
      }
    });
  }

}
