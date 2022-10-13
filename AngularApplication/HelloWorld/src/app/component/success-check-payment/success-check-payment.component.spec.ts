import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCheckPaymentComponent } from './success-check-payment.component';

describe('SuccessCheckPaymentComponent', () => {
  let component: SuccessCheckPaymentComponent;
  let fixture: ComponentFixture<SuccessCheckPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessCheckPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessCheckPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
