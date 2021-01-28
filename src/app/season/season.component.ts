import { Component, OnInit } from '@angular/core';
import { Shows } from '../shows';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.styl']
})
export class SeasonComponent implements OnInit {

  title = 'angular Show page';
  searchText: any;
  showsssss: Shows[] | any;

  constructor(private showservs: TvshowsService) {

  }


  ngOnInit(): void {
    this.showservs.getTvSeason().subscribe(
      data=>{
        // debugger
        this.showsssss=data;
      }
    );
  }

 }
