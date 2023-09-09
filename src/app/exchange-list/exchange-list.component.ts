import {Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output, ElementRef, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss']
})
export class ExchangeListComponent {
  @Input() dynaticStyle?: string;
  @Output() onShowColleteralPopup: EventEmitter<any> = new EventEmitter();
  @Output() onShowClosePosPopup: EventEmitter<any> = new EventEmitter();

  openCollateralPopup() {
    this.onShowColleteralPopup.emit();
  }

  openClosePosPopup() {
    this.onShowClosePosPopup.emit();
  }

}
