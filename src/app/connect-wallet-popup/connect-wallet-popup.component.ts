import {Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output, ElementRef, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-connect-wallet-popup',
  templateUrl: './connect-wallet-popup.component.html',
  styleUrls: ['./connect-wallet-popup.component.scss']
})
export class ConnectWalletPopupComponent {
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  close() {
    this.onClose.emit();
  }
}
