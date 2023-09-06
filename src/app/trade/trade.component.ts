import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent {
  isShowCollateralPopup = false;
  isShowClosePosPopup = false;
  value: number = 2;
  options: Options = {
    floor: 2,
    ceil: 50,
    showTicks: true,
    tickStep: 1,
    showTicksValues: true,
    ticksArray: [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
  };

  showColleeralPopup() {
    this.isShowCollateralPopup = true;
  }

  showClosePosPopup() {
    this.isShowClosePosPopup = true;
  }
}
