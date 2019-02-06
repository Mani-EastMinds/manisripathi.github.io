import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.css']
})
export class DropdownPageComponent implements OnInit {
  data: Array<any> = [];
  label: string = 'Select News Article';
  isDisabled: boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.data = [
      {
        id: 1,
        label: 'Sports'
      },
      {
        id: 2,
        label: 'Weather'
      },
      {
        id: 3,
        label: 'International'
      },
      {
        id: 4,
        label: 'Domestic'
      },
      {
        id: 5,
        label: 'Comedy'
      }
    ];
  }

  onSelection($event) {
    console.log('From the select page compoent', $event);
  }

}
