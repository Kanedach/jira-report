import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jira} from './jira';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(private http: HttpClient) { }

  getJira(startAtJira: string, maxResultsJira: string): Observable<Jira>  {
    console.log(startAtJira);
    return this.http.get<any>('./assets/jira.json', {
      params: {
        startAt: startAtJira,
        maxResults: maxResultsJira
      }
    });
  }

}
