import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAppointHomeComponent } from './doc-appoint-home.component';

describe('DocAppointHomeComponent', () => {
  let component: DocAppointHomeComponent;
  let fixture: ComponentFixture<DocAppointHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocAppointHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAppointHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
