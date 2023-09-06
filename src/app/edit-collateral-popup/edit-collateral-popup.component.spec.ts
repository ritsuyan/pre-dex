import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollateralPopupComponent } from './edit-collateral-popup.component';

describe('EditCollateralPopupComponent', () => {
  let component: EditCollateralPopupComponent;
  let fixture: ComponentFixture<EditCollateralPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCollateralPopupComponent]
    });
    fixture = TestBed.createComponent(EditCollateralPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
