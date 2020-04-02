import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDoctorProfileComponent } from './manage-doctor-profile.component';

describe('ManageDoctorProfileComponent', () => {
  let component: ManageDoctorProfileComponent;
  let fixture: ComponentFixture<ManageDoctorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDoctorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDoctorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
