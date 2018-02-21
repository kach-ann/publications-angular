import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Publication} from './model';
import {Subject} from "rxjs/Subject";

@Injectable()
export class PublicationService {
  private url = 'api/publications';

  private newPublicationsSource = new Subject<Publication>();

  newPublications$ = this.newPublicationsSource.asObservable();

  constructor(
    private http: HttpClient) { }

    getPublications(): Observable<Publication[]> {
      return this.http.get<Publication[]>(this.url);
    }

    savePublication(publication: Publication): Observable<Publication> {
      return this.http.post<Publication>(this.url, publication)
        .do((response) => this.newPublicationsSource.next(response));
    }
}
