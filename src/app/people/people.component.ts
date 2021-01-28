import { Shows } from './../shows';

import { Component, Input, OnInit } from '@angular/core';
import { Peopless } from 'src/people';
import { TvpeopleService } from '../tvpeople.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.styl']
})
export class PeopleComponent implements OnInit {

  peo: Peopless[] | any;
  searchText: any;


  constructor(private peopeservice: TvpeopleService) { }



  ngOnInit(): void {
    this.peopeservice.getTvPeople().subscribe(
      data => {
        // this.peo= data;
        // debugger
        this.peo= data;

    },
    );
  }

}
