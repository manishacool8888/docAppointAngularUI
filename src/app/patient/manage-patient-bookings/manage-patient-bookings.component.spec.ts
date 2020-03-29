import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePatientBookingsComponent } from './manage-patient-bookings.component';

describe('ManagePatientBookingsComponent', () => {
  let component: ManagePatientBookingsComponent;
  let fixture: ComponentFixture<ManagePatientBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePatientBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePatientBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
