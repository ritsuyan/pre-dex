import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeOrderTabsComponent } from './trade-order-tabs.component';

describe('TradeOrderTabsComponent', () => {
  let component: TradeOrderTabsComponent;
  let fixture: ComponentFixture<TradeOrderTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeOrderTabsComponent]
    });
    fixture = TestBed.createComponent(TradeOrderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
