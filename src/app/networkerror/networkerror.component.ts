import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ShowTrackerError } from '../showtrackererror.model';

@Component({
  selector: 'app-networkerror',
  templateUrl: './networkerror.component.html',
  styleUrls: ['./networkerror.component.styl']
})
export class NetworkerrorComponent implements OnInit {
  @Input() errorObj: ShowTrackerError | any;

  constructor() { }

  ngOnInit(): void {
  }

}
