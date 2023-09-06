import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSelectComponent } from './token-select.component';

describe('TokenSelectComponent', () => {
  let component: TokenSelectComponent;
  let fixture: ComponentFixture<TokenSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenSelectComponent]
    });
    fixture = TestBed.createComponent(TokenSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
