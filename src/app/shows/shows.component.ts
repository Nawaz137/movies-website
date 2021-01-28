import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvshowsService} from '../tvshows.service';
import { Shows } from './../shows';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.styl']
})
export class ShowsComponent implements OnInit {
  title = 'angular Show page';
  searchText: any;
  showsssss: Shows[] | any;

  constructor(private showservs: TvshowsService) {

  }


  ngOnInit(): void {
    this.showservs.getTvShows().subscribe(
      data=>{
        // debugger
        this.showsssss=data;
      }
    );
  }

 }
