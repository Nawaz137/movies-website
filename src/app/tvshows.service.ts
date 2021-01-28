import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowTrackerError } from './showtrackererror.model';
import { Router } from '@angular/router';
// import { Shows } from './shows';
// import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
   urls= 'http://api.tvmaze.com/show';
   urlseason= 'http://api.tvmaze.com/shows/1/seasons';
   url='http://api.tvmaze.com/';
   constructor(private http: HttpClient) { }


  // api calls to fetch the shows details
  getTvShows(): Observable<any>{
    return this.http.get(this.urls);
  }
    // api calls to fetch the shows details
    // getTvShows(): Observable<Shows [] | ShowTrackerError> {
    // const url = this.url + 'shows';
    // return this.http.get<Shows[]>(url)
    //   .pipe(
    //     catchError(err => {
    //       return this.handleHttpError(err);
    //     }
    //     )
    //   );
    //  }


  getTvSeason(): Observable<any>{
    return this.http.get(this.urlseason);
  }


   // api calls for fetching the shows component details of a seleted show
    showDetail(showId: number) {
    const url = this.url + `shows/${showId}`;
    return this.http.get(url)
  }
  // showDetail(showId: number): Observable<Shows | ShowTrackerError> {
  //   const url = this.url + `shows/${showId}`;
  //   return this.http.get<Shows>(url)
  //     .pipe(
  //       catchError(err => {
  //         return this.handleHttpError(err);
  //       })
  //     );
  // }



  // api calls for fetching the season component details of a seleted show
  // showDetailSeason(showId: number) {
  //   const url = this.url + `season/${showId}`;
  //   return this.http.get(url)

  // }

  // handles the http error and stores the related data in show tracker error object
  handleHttpError(error: HttpErrorResponse): Observable<ShowTrackerError> {
    const dataError = new ShowTrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred while retrieving shows. Please refresh the page';
    return throwError(dataError);
  }

}
