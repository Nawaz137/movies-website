import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peopless } from 'src/people';

@Injectable({
  providedIn: 'root'
})
export class TvpeopleService {
  urlp= '/assets/people.json';
  url='http://api.tvmaze.com/'

  constructor(private http: HttpClient) { }

  getTvPeople(): Observable<any>{
    return this.http.get(this.urlp);
  }

   // api calls for fetching the People details of a seleted show
  showpeopleDetail(showId: number) {
    const url = this.url + `people/${showId}`;
    return this.http.get(url)

  }
}
