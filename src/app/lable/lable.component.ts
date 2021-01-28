import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lable',
  templateUrl: './lable.component.html',
  styleUrls: ['./lable.component.styl']
})
export class LableComponent implements OnInit {
    @Input() label: string | any;
    @Input() value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
