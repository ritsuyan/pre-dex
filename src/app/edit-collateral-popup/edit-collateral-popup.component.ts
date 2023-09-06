import {Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output, ElementRef, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-edit-collateral-popup',
  templateUrl: './edit-collateral-popup.component.html',
  styleUrls: ['./edit-collateral-popup.component.scss']
})
export class EditCollateralPopupComponent {
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  close() {
    this.onClose.emit();
  }
}
