import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

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
    this.dataItems.map((item) => {
      item.active = false;
    })
  }

  private onSelect(item): void {
    item.active = true;
    this.dataItems.map((dataItem) => {
      if(dataItem.id != item.id) {
        dataItem.active = false;
      }
    })
    this.selectedItem = item;
    this.onChange.emit(item);
    this.label = item.label;
    this.toggleDropdown();
  }

  private toggleDropdown(): void {
    this.dropDownVisible = !this.dropDownVisible;
  }
}
