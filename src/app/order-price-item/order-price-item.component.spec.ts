import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPriceItemComponent } from './order-price-item.component';

describe('OrderPriceItemComponent', () => {
  let component: OrderPriceItemComponent;
  let fixture: ComponentFixture<OrderPriceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPriceItemComponent]
    });
    fixture = TestBed.createComponent(OrderPriceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
