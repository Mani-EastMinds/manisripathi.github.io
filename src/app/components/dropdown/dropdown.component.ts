import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() dataItems: Array<any> = [];
  @Input() placeholder: string;
  @Input() searchable: boolean;
  @Input() isDisables: boolean = false;
  @Output() onChange: EventEmitter<any>;

  selectedItem: any;
  dropDownVisible: boolean = false;
  inputSearch: string;
  arrowkeyLocation: any = 0;
  

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target) && this.dropDownVisible) {
      return;
    } else if(this.dropDownVisible) {
        this.dropDownVisible = false;        
    }
  }
  
  constructor(
    private eRef: ElementRef
  ) {
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
    this.inputSearch = item.label;
    this.selectedItem = item;
    this.onChange.emit(item);
    this.toggleDropdown();
  }

  private toggleDropdown(): void {
    this.dropDownVisible = !this.dropDownVisible;
  }

  private onKeydown(event: any) {
    const keyCode = event.keyCode;
    switch (keyCode) {
      // Enter Key
      case 13:
        this.dropDownVisible = false;
        event.preventDefault();
        break;
      // Escape Key
      case 27:
        this.dropDownVisible = false;
        event.preventDefault();
        break;
      // Up Arrow      
      case 38:
        this.arrowkeyLocation--;
        event.preventDefault();
        break;
      // Down Arrow      
      case 40:
        this.arrowkeyLocation++;
        event.preventDefault();
        break;
      // Delete Key      
      case 46:
        this.inputSearch = "";
        this.dropDownVisible = true;
        event.preventDefault();
        break;

      default:
        break;
    }
  }
}
