import { Component } from '@angular/core';
import { Options, LabelType } from 'ngx-slider-v2';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent {
  active = 1;
  activeMobileNav = 1;
  isShowCollateralPopup = false;
  isShowClosePosPopup = false;
  value: number = 2;
  marketPriceOpen = true;
  limitPriceOpen = false;
  options: Options = {
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#34CB88',
      to: '#34CB88'
    },
    floor: 2,
    ceil: 50,
    showTicks: true,
    tickStep: 1,
    showTicksValues: true,
    ticksArray: [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    translate: (value: number, label: LabelType): string => {
      return value + 'x'; 
    }
  };

  showColleeralPopup() {
    this.isShowCollateralPopup = true;
  }

  showClosePosPopup() {
    this.isShowClosePosPopup = true;
  }
}
