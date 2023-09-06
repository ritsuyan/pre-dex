import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradeComponent } from './trade/trade.component';
import { HeaderComponent } from './header/header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TradeOrderTabsComponent } from './trade-order-tabs/trade-order-tabs.component';
import { TokenSelectComponent } from './token-select/token-select.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { OrderBookComponent } from './order-book/order-book.component';
import { OrderPriceItemComponent } from './order-price-item/order-price-item.component';
import { ConnectWalletPopupComponent } from './connect-wallet-popup/connect-wallet-popup.component';
import { ClosePositionPopupComponent } from './close-position-popup/close-position-popup.component';
import { EditCollateralPopupComponent } from './edit-collateral-popup/edit-collateral-popup.component';
import { ExchangeListComponent } from './exchange-list/exchange-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TradeComponent,
    TradeOrderTabsComponent,
    TokenSelectComponent,
    OrderBookComponent,
    OrderPriceItemComponent,
    ConnectWalletPopupComponent,
    ClosePositionPopupComponent,
    EditCollateralPopupComponent,
    ExchangeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    NgbNavModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
