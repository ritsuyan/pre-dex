import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePositionPopupComponent } from './close-position-popup.component';

describe('ClosePositionPopupComponent', () => {
  let component: ClosePositionPopupComponent;
  let fixture: ComponentFixture<ClosePositionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosePositionPopupComponent]
    });
    fixture = TestBed.createComponent(ClosePositionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
