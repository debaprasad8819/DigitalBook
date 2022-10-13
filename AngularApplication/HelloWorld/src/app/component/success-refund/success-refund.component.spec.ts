import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRefundComponent } from './success-refund.component';

describe('SuccessRefundComponent', () => {
  let component: SuccessRefundComponent;
  let fixture: ComponentFixture<SuccessRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRefundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
