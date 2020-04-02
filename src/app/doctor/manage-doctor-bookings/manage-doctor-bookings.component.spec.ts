import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDoctorBookingsComponent } from './manage-doctor-bookings.component';

describe('ManageDoctorBookingsComponent', () => {
  let component: ManageDoctorBookingsComponent;
  let fixture: ComponentFixture<ManageDoctorBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDoctorBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDoctorBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
