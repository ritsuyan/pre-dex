import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWalletPopupComponent } from './connect-wallet-popup.component';

describe('ConnectWalletPopupComponent', () => {
  let component: ConnectWalletPopupComponent;
  let fixture: ComponentFixture<ConnectWalletPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectWalletPopupComponent]
    });
    fixture = TestBed.createComponent(ConnectWalletPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
