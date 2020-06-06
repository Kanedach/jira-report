import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jira} from './jira';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(private http: HttpClient) { }

  getInit(): Observable<Jira>  {
    return this.http.get<any>('./assets/jira.json');
  }

}
