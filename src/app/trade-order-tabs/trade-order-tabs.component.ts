import {Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output, ElementRef, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-trade-order-tabs',
  templateUrl: './trade-order-tabs.component.html',
  styleUrls: ['./trade-order-tabs.component.scss']
})
export class TradeOrderTabsComponent {
  seperator = ":";

  @Input() topRightLabel?: string; 
  @Input() topLeftLabel?: string;
  @Input() topRightValue?: any;
  @Input() usdStandardOnly?: boolean;
}
