import { Component, OnInit } from '@angular/core';
import { TvpeopleService } from './tvpeople.service';
import { TvshowsService } from './tvshows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'angular-website';

  // searchText: any;
  today=new Date();

  tvshow: any;
  tvpeople: any;

  constructor(private tvshwservice:TvshowsService, private tvpeopleservice: TvpeopleService) {}

  ngOnInit() {
      this.tvshwservice.getTvShows()
        .subscribe(response => {
          this.tvshow = response;
        });

      this.tvpeopleservice.getTvPeople()
      .subscribe(response =>{
        this.tvpeople = response;
      } );
  }
}
