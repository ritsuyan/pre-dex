import {Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output, ElementRef, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-token-select',
  templateUrl: './token-select.component.html',
  styleUrls: ['./token-select.component.scss']
})
export class TokenSelectComponent {
  @Input() usdStandardOnly?: boolean;
}
