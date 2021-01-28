import { TvpeopleService } from './../tvpeople.service';
import { Shows } from './../shows';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Peopless } from 'src/people';
// import { TvpeopleService } from '../tvpeople.service';
import { TvshowsService } from '../tvshows.service';
import { ShowTrackerError } from '../showtrackererror.model';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.styl']
})
export class ShowdetailComponent implements OnInit {

  showId: any;
  show: Shows | any;
  people: Peopless | any;
  networkError: any;
  error: ShowTrackerError | any;

  constructor(private activatedRoute: ActivatedRoute,
              private tvshowdetail: TvshowsService,
              private tvpeopledetail: TvpeopleService,
              private router: Router
            ) { }

  ngOnInit() {
    this.networkError = false;
    this.activatedRoute.params.subscribe(
      (params) => this.showId = +params.id
    );

    // check if the url contains a number else route to page not found
    if (isNaN(this.showId)) {
      this.router.navigate(['/page-not-found']);
    } else {
       this.fetchDetails();
    }

  }

  //code for fetching the details from api
  fetchDetails(): void {
    this.tvshowdetail.showDetail(this.showId).subscribe(
      (data: any) => {
        this.show = data;
        console.log('show data',data)
      },
      (err: ShowTrackerError) => {
        this.error = err;
        this.networkError = true;
        console.log('show error',err)
       }
    );
  }

}
