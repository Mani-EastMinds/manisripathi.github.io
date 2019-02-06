import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() dataItems: Array<any> = [];
  @Input() label: string;
  @Input() isDisables: boolean = false;
  @Output() onChange: EventEmitter<any>;

  selectedItem: any;
  dropDownVisible: boolean = false;

  constructor() {
    this.onChange = new EventEmitter();
  }

  ngOnInit() {
  }

  onSelect(item): void {
    this.selectedItem = item;
    this.onChange.emit(item);
  }

  toggleDropdown() {
    this.dropDownVisible = !this.dropDownVisible;
  }
}
