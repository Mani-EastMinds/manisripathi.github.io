import { Component, OnInit, Input, Optional, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']

})
export class SelectComponent implements OnInit {

  @Input() id: string;
  @Input() placeholder: string;
  @Input() isActive: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() searchable: boolean;
  @Input() isDataProvided: boolean;
  @Input() data: Array<any> = [];
  @Input() url: string;

  @Output() onOptionSelect: EventEmitter<any>;
  optionsData: Array<any> = [];
  selectedOption: any;
  toggleDropdown: boolean = false;
  searchOption: string;

  constructor() {
    this.onOptionSelect = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  public toggle(): void {
    this.toggleDropdown = !this.toggleDropdown;
  }

  public onSelect(item: any): void {
    this.selectedOption = item;
    this.searchOption = item.displayLabel;
    this.toggle();
    this.onOptionSelect.emit(item);
  }

}
