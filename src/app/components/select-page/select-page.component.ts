import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {
  data: { id: number; displayLabel: string; }[];

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        id: 100001,
        displayLabel: 'Sports'
      },
      {
        id: 100002,
        displayLabel: 'Weather'
      },
      {
        id: 100003,
        displayLabel: 'Local'
      },
      {
        id: 100004,
        displayLabel: 'International'
      },
      {
        id: 100005,
        displayLabel: 'Fashion'
      }
    ];
  }

}
