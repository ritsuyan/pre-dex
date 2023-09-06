import {Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output, ElementRef, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-close-position-popup',
  templateUrl: './close-position-popup.component.html',
  styleUrls: ['./close-position-popup.component.scss']
})
export class ClosePositionPopupComponent {
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  close() {
    this.onClose.emit();
  }
}
