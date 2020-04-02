import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDoctorBookingSlotComponent } from './manage-doctor-booking-slot.component';

describe('ManageDoctorBookingSlotComponent', () => {
  let component: ManageDoctorBookingSlotComponent;
  let fixture: ComponentFixture<ManageDoctorBookingSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDoctorBookingSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDoctorBookingSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
