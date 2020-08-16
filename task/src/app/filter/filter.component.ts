import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor() { }

  ngOnInit(): void {
  }

}
