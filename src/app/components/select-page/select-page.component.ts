import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {
  data: Array<any> = [];
  label: string = 'News';
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
